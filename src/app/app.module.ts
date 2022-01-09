import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadialGaugeAnimationComponent } from './radial-gauge-animation/radial-gauge-animation.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    RadialGaugeAnimationComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IgxRadialGaugeModule,
	  BrowserAnimationsModule,
  	FormsModule,
	  IgxRadialGaugeModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
