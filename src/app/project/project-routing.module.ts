import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project.component';

const routes: Routes = [
  {
    path:'', component:ProjectComponent, children:[
    {
      path:'home', component:HomeComponent
     },
     {
      path:'', redirectTo:'home', pathMatch:'full'
     }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
