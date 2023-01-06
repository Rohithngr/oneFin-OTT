import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

 
  baseurl= environment.live_url;
  token:any
  constructor(private http:HttpClient) {
    
   }
  //login
  loginDetails(data:any){
    return this.http.post(`${this.baseurl}usermodule/login/`,data)
  }
  //login
  //Movies
  getMovies(){
    return this.http.get(`${this.baseurl}maya/movies/`)
  }
  //Movies
}
