import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieDetails:any=[]
  title:any;
  error:boolean=false;
  sliceOptions:any = {
    start: 0,
    end: 25,
    default: 100
  }
  details:any={
    'title':null,
    'description':null,
    'genres':null,
  }
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.movies()
  }

  movies(){
    this.api.getMovies().subscribe(
      (resp:any)=>{
        console.log(resp);
        
        this.movieDetails=resp.results
        this.error=false
      },
     (err:any)=>{
      console.log(err);
      this.error=true
     }
    )
  }
  onExpandText(evt:any): void{
    this.sliceOptions.end = this.sliceOptions.end?undefined:this.sliceOptions.default;
  }
  movieDetail(data:any){
    console.log(data);
    for(let i=0;i<this.movieDetails.length;i++){
      if(i==data){
       this.details['title']=this.movieDetails[i].title
       this.title=this.movieDetails[i].title
       this.details['description']=this.movieDetails[i].description
       this.details['genres']=this.movieDetails[i].genres
      }
    }
  }
  search(event:any){
    const value=event.target.value;
    console.log(value);
    
  }
}
