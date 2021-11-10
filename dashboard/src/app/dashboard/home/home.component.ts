import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { DashboardServiceService } from '../service/dashboard-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  Linetype = 'LineChart'

  chartData = {
    options: {
      // hAxis: {
      //   title: 'Month'
      // },
      // vAxis:{
      //    title: 'Sell'
      // },
      legend: { position: 'top' },

      // title: '',
      // legend: { position: 'none' },
      // backgroundColor: '#1C1C1C',
      // vAxis: { title: '', minValue: 0, maxValue: 25, gridlines: { color: '212121' }, textStyle: { color: 'fff', fontSize: 10 } },
      // hAxis: { textStyle: { color: 'fff', fontSize: 10 }, slantedTextAngle: 90 },
      // bubble: { textStyle: { fontSize: 13 } },
      // series: { 0: { color: 'green', lineWidth: 1 } },
      // sizeAxis: { minValue: 11, maxSize: 11, maxValue: 11, minSize: 11 },
    },
    width: 270,
    height: 400
  };


  chartData1: any;

  columnNames: any;
  data: any;
  loading: boolean;
  chartDataArr: any;
  lineChart = []
  loadChart: boolean = false;


  constructor(private dashboardService:DashboardServiceService) { }

  ngOnInit() {
    this.columnNames = ["Month", "Line Conversation"]
    this.data = [
      ["Jan", 500],
      ["Feb", 800],
      ["Mar", 400],
      ["Apr", 600],
      ["May", 400],
      ["Jun", 750],
      ["Jul", 800],
      ["Aug", 810],
      ["Sep", 820],
      ["Oct", 900],
      ["Nov", 910],
      ["Dec", 920]
    ]
    this.getData();
  }
  getData(){
    this.dashboardService.getAllChartData().subscribe((res: any) => {
      this.loading = false;
      if (res.IsSuccess) {
        this.loading = false;
        this.chartDataArr = res.Data;
        this.dataVisualization()
      } else {
        this.loading = false;
      }
    });
  }
  dataVisualization(){
    this.chartDataArr.forEach((element,i) => {
      let chartData = {
        id: element._id,
        options: {
          legend: { position: 'top' },
        },
        width: 270,
        height: 400,
        columnNames: ["Month", element.title],
        data:[]
      }
      element.data.forEach((data,j) => {
        const dateChange = new Date(data.date);
        chartData.data.push(
          [`${dateChange.getUTCDate()} ${dateChange.getUTCMonth()+1}`, parseInt(data.value)],
        )
      });
      this.lineChart.push(chartData)
    });
    this.loadChart = true;
    console.log("this.lineChart",this.lineChart)
  }
  onExportSelect(e) {
    let eventData = e.target.value
    if (eventData == 'exportPdf') this.htmltoPDF();
  }
  htmltoPDF() {
    setTimeout(() => {
      // html2canvas(document.querySelector("#chartDivId")).then(canvas => {

      //   var pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);

      //   var imgData = canvas.toDataURL("image/jpeg", 1.0);
      //   pdf.addImage(imgData, 0, 0, canvas.width, canvas.height);
      //   // pdf.output('datauri');
      //   pdf.save('dataRecord.pdf');

      // });
      html2canvas(document.querySelector("#chartDivId")).then(canvas => {
        const contentDataURL = canvas.toDataURL('image/png')
        let pdf = new jsPDF('l', 'cm', 'a4'); //Generates PDF in landscape mode
        // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
        pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);
        pdf.save('Filename.pdf');
      });
    }, 2000);

  }
}
