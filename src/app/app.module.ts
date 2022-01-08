import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadialGaugeAnimationComponent } from './radial-gauge-animation/radial-gauge-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    RadialGaugeAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IgxRadialGaugeModule,
	  BrowserAnimationsModule,
  	FormsModule,
	  IgxRadialGaugeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
