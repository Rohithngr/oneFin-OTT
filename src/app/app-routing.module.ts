import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'login', loadChildren:()=>import('./gateway/gateway.module').then(m => m.GatewayModule)
  },
  {
    path:'', redirectTo:'login', pathMatch:'full'
  },
  {
    path:'oneFin', loadChildren:()=>import('./project/project.module').then(m => m.ProjectModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
