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
      hAxis: {
        title: 'Month'
      },
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
    width: 1000,
    height: 400
  };
  columnNames: any;
  data: any;
  constructor() { }

  ngOnInit() {
    this.columnNames = ["Month", "Apple", "Mi"]
    this.data = [
      ["Jan", 500, 600],
      ["Feb", 800, 900],
      ["Mar", 400, 600],
      ["Apr", 600, 500],
      ["May", 400, 300],
      ["Jun", 750, 700],
      ["Jul", 800, 710],
      ["Aug", 810, 720],
      ["Sep", 820, 730],
      ["Oct", 900, 840],
      ["Nov", 910, 850],
      ["Dec", 920, 890]
    ]
  }

}
