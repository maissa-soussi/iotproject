import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iotproject';
  vs=false;
  temp : any;

  constructor(private http: HttpClient, private toastr: ToastrService) { 
  }

  private async getTemp(): Promise<void> {
    
   while(true){
     await new Promise(f => setTimeout(f, 5000));
     this.http.get<any>("http://localhost:5000/subscriber")
     .subscribe(
    (result) => {
      this.temp = result;
      console.log(result[0].temperature);
      if (this.temp[0].temperature > 40){
        this.toastr.error('La temperature est ' + this.temp[0].temperature + '° C');
      }

    },
    (error) => {console.log(error); }
  )
     
   }
 }

 ngOnInit(): void {
   this.getTemp()
  
 }

  appear(){
    this.vs=true;
  }
  disappear(){
    this.vs=false;
  }
  
}
