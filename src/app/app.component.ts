import { HttpClient } from '@angular/common/http';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  
  selctedCountry: string = '';
  selectedArtist: string = "";

  constructor(private http: HttpClient){ 
    this.loadGermany();}

  summary: string = "";
  published: string = "";
  content: string = "";

  similar: string[] = [];
  pic: string[] = [];


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

selectedChangeHandler (event){

  this.selctedCountry = event.target.value; 
  this.http
  .get('http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country='+''+this.selctedCountry+''+'&api_key=9de61f588c001cf9f09470d925434648&format=json')
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
      this.pictures[i] =posts.topartists.artist[i].image[0][0];
    }
});
}


onSelectedArtist(name: string)
{
 this.selectedArtist = name;
 this.http
 .get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='+this.selectedArtist+'&api_key=9de61f588c001cf9f09470d925434648&format=json')
 .subscribe((posts: any)=>{

  this.summary = posts.artist.bio.summary;
  this.published = posts.artist.bio.published;
  this.content = posts.artist.bio.content;
  posts.artist.name; 
  posts.artist.stats.listeners;
  posts.artist.stats.playcount;

  for(let i = 0; i<5; i++)
  {
    this.similar[i] = posts.artist.similar.artist[i].name;
    this.pic[i] = posts.artist.image[0]['#text'];
  }
  
});
}

returnSelectedItem(){
  this.selectedArtist = "";
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
