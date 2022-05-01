import { Artist } from './artist';
import { HttpClient } from '@angular/common/http';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ArtistServicesService } from './artist-services.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  
  selctedCountry: string = '';
  
  constructor(private http: HttpClient, private artistSearch: ArtistServicesService)
  { 
    artistSearch[1  ].listner
    this.loadGermany2();
  }

  
  posts: any [] = [];
  names: string [] = [];
  listeners: string [] = [];
  pictures: string [] = [];
  countries: string[] = ["germany", "france", "spain"];

  loadGermany(){
    this.http
  .get('http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=germany&api_key=9de61f588c001cf9f09470d925434648&format=json')
  .subscribe((posts: any)=>{
      
      for(let i = 0; i<10; i++)
      {
        this.catPostText[i] = posts.topartists.artist[i].name;
      }
      for(let i = 0; i<10; i++)
      {
        this.listeners[i] = posts.topartists.artist[i].listeners;
      }
      for(let i = 0; i<10; i++)
      {
        this.pictures[i] = posts.topartists.artist[i].image[0];
      }
  
  });
}

loadGermany2(){

}

selectedChangeHandler (event){

  this.selctedCountry = event.target.value; 
  this.http
  .get('http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country='+''+this.selctedCountry+''+'&api_key=9de61f588c001cf9f09470d925434648&format=json')
  .subscribe((posts: any)=>{
    for(let i = 0; i<10; i++)
    {
      this.listeners[i] = this.artistSearch[i].listner;
      this.names[i] = this.artistSearch[i].name;
      this.pictures[i] = this.artistSearch[i].picture; 

    }
});
}


  catPostText = [
  ]

  catPictures =[
    "assets/img/cat/1.jpg",
    "assets/img/cat/2.jpg",
    "assets/img/cat/3.jpg",
    "assets/img/cat/4.jpg",
    "assets/img/cat/5.jpg"]
}
