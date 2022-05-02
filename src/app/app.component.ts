import { HeaderComponent } from './header/header.component';
import { HttpClient } from '@angular/common/http';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { interval, map, startWith } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  
  selctedCountry: string = '';
  selectedArtist: string = "";

  constructor(private http: HttpClient){ 
    this.loadGermany();
}

  detailName: string = '';
  detailListener: string = '';
  detailPlays: string = '';
  detailTrack: string [] = [];
  detailAlbum: string [] = []; 

  imageUrl$: any;
  similar: string[] = [];
  pic: string[] = [];


  buttonSignalFromHeader: string; 

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
        this.names[i] = posts.topartists.artist[i].name;
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
      this.names[i] = posts.topartists.artist[i].name;
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
 .get('https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist='+this.selectedArtist+'&api_key=9de61f588c001cf9f09470d925434648&format=json')
 .subscribe((posts: any)=>{

   for(let i = 0; i<5; i++)
   {
     this.detailAlbum[i] = posts.topalbums.album[i].name;
   }

   });


   this.http
  .get('http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist='+this.selectedArtist+'&api_key=9de61f588c001cf9f09470d925434648&format=json')
  .subscribe((posts: any)=>{

   for(let i = 0; i<5; i++)
   {
     this.detailTrack[i] = posts.toptracks.track[i].name;
   }

  });
 

 this.http
 .get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='+this.selectedArtist+'&api_key=9de61f588c001cf9f09470d925434648&format=json')
 .subscribe((posts: any)=>{

  this.detailName = posts.artist.name;
  this.detailListener = posts.artist.stats.listeners;
  this.detailPlays = posts.artist.stats.playcount;

  for(let i = 0; i<5; i++)
  {
    this.similar[i] = posts.artist.similar.artist[i].name;
    this.pic[i] = posts.artist.image[0]['#text'];

    this.imageUrl$ = interval(5000).pipe(map(i => {return this.pic[i]}),startWith(this.pic[i]));
    }
});
}

returnSelectedItem(){
  this.selectedArtist = "";
  
}

receivedChildMessage: string;

getMessage(message) {
    this.receivedChildMessage = message;
}

returnToMain(){
  this.receivedChildMessage = "";
}
}
