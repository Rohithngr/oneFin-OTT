import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
    {
      path:'',component:AppComponent, children:[
        {
          path:'login', loadChildren:()=>import('./gateway/gateway.module').then(m => m.GatewayModule)
        },
        {
          path:'oneFin', loadChildren:()=>import('./project/project.module').then(m => m.ProjectModule),canActivate:[AuthGuardService]
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
