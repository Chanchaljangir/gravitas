import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DashboardServiceService } from '../service/dashboard-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  paramsId: any;
  loading: boolean;
  chartDataArr: any;
  lineChart: any = [];
  loadChart: boolean = false;
  Linetype = 'LineChart'
  constructor(private route: ActivatedRoute,private dashboardService:DashboardServiceService) {
    this.route.params.subscribe((params: Params) => {
      this.paramsId = params['id'];
    })
  }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.dashboardService.getSpecificStudent(this.paramsId).subscribe((res: any) => {
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
      let chartData = {
        id: this.chartDataArr._id,
        options: {
          legend: { position: 'top' },
        },
        width: 1000,
        height: 400,
        columnNames: ["Month", this.chartDataArr.title],
        data:[]
      }
      this.chartDataArr.data.forEach((data,j) => {
        const dateChange = new Date(data.date);
        chartData.data.push(
          [`${dateChange.getUTCDate()} ${dateChange.getUTCMonth()+1}`, parseInt(data.value)],
        )
      });
      this.lineChart = chartData
    this.loadChart = true;
    console.log("this.lineChart",this.lineChart)
  }
}
