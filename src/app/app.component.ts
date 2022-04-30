import { HttpClient } from '@angular/common/http';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  constructor(private http: HttpClient){ 
    this.loadPosts();}

  posts: any [] = [];
  names: string [] = [];
  listeners: string [] = [];
  pictures: string [] = [];

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

  loadFrance(){
    this.http
  .get('http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=france&api_key=9de61f588c001cf9f09470d925434648&format=json')
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
loadPosts(){
  this.http
  .get('http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=9de61f588c001cf9f09470d925434648&format=json')
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

  catPostText = [
  ]

  catPictures =[
    "assets/img/cat/1.jpg",
    "assets/img/cat/2.jpg",
    "assets/img/cat/3.jpg",
    "assets/img/cat/4.jpg",
    "assets/img/cat/5.jpg"]

  buttonClicked(){
    alert("Hallo wie geht es dir?")
  }
}
