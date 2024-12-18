import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormWComponent } from './form-w/form-w.component';
import { DisplayWComponent } from './display-w/display-w.component';

const routes: Routes = [
  {path:'', component:HomeComponent },
  {path:'location', component: FormWComponent},
  {path:'weather', component: DisplayWComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
