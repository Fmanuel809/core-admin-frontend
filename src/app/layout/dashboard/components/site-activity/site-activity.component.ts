import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-activity',
  templateUrl: './site-activity.component.html',
  styleUrls: ['./site-activity.component.scss']
})
export class SiteActivityComponent implements OnInit {

  constructor() { }

  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
  ];
  public lineChartLabels: Array<any> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(246,194,62,0.2)',
      borderColor: 'rgba(246,194,62,1)',
      pointBackgroundColor: 'rgba(246,194,62,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(246,194,62,0.8)'
    },
    {
      // dark grey
      backgroundColor: 'rgba(231,74,59,0.2)',
      borderColor: 'rgba(231,74,59,1)',
      pointBackgroundColor: 'rgba(231,74,59,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(231,74,59,1)'
    },
    {
      // grey
      backgroundColor: 'rgba(28,200,138,0.2)',
      borderColor: 'rgba(28,200,138,1)',
      pointBackgroundColor: 'rgba(28,200,138,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(28,200,138,0.8)'
    }
  ];
  public lineChartLegend: boolean;
  public lineChartType: string;

  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

  ngOnInit() {
    this.lineChartLegend = true;
    this.lineChartType = 'line';
  }

}
