import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js'
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
chart:any;
re:any;
d : number[] = [0,0,0,0,0,0,0,0,0,0]
  constructor(private http: HttpClient) {    
    this.http.get<any>("http://localhost:5000/temperatures")
        .subscribe(
       (result) => {
        for (let i = 0; i < result.length; i++){
          this.d[i] = result[i].temperature
        }
        console.log(this.d);
       },
       (error) => {console.log(error); }
     )

     
   }

  ngOnInit(): void {
    
    this.chart = document.getElementById('myChart');
      Chart.register(...registerables);
      this.loadChart();
      
  }
  async loadChart(): Promise<void>{
    await new Promise(f => setTimeout(f, 2000));
    console.log(this.d)
    new Chart(this.chart, {
      type:'line',
      data:{
        datasets: [{
          data:this.d,
          label: 'Températures',
          backgroundColor: '#007bff',
          tension: 0.2,
          borderColor: '#007bff',
        }],
        labels: [
          '1','2','3','4','5','6','7','8','9','10'
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          }
        }
      }
    })
  }

}
