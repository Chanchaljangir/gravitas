import { Component, OnInit } from '@angular/core';

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
  columnNames: any;
  data: any;
  constructor() { }

  ngOnInit() {
    this.columnNames = ["Month", "Apple"]
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
  }

}
