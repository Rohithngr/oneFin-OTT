import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.css']
})
export class GatewayComponent implements OnInit {
  isLoading = false;

  constructor(private builder:FormBuilder , private api:ApiService, private router:Router) { }
  errorAlert:boolean=false;
  ngOnInit(): void {
  }
  loginForm= this.builder.group({
    username:['',Validators.required],
    password:['',Validators.required],

  })

  get f(){
    return this.loginForm.controls;
  }
  error:boolean=false;
  login(){
    if(this.loginForm.invalid){
      this.error= true;
    }
    else{
    this.isLoading = true;

     setTimeout(() => {
      this.api.loginDetails(this.loginForm.value).subscribe(
        (response:any)=>{  
          this.isLoading = false;
          this.errorAlert=false;
          localStorage.setItem('token',response.data.token)
          this.router.navigateByUrl('oneFin')
        },
        error=>{
          this.isLoading = false;
          this.errorAlert=true
        }
      )
     }, 2000);
    }

  }

}
