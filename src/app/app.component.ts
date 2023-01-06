import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oneFin';
  constructor(private router:Router) {
    
  }

 ngOnInit() {

   if(localStorage.getItem('token')){
     this.router.navigate(['oneFin'])
   }
   else{
     this.router.navigate(['login'])
   }
 }
}
