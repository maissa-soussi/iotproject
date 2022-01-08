import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadialGaugeAnimationComponent } from './radial-gauge-animation/radial-gauge-animation.component';

const routes: Routes = [
  {
    path: "",
    component: RadialGaugeAnimationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
