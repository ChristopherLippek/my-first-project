import { ArtistSearchService } from './artist-search.service';
import { Artist } from './artist';
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

  constructor(private http: HttpClient, private artistServices: ArtistSearchService){ 
   
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

  artist: Artist [] = [];
  buttonSignalFromHeader: string; 

  posts: any [] = [];
  names: string [] = [];
  listeners: string [] = [];
  pictures: string [] = [];
  countries: string[] = ["germany", "france", "spain"];

  loadGermany(){
    this.artist = this.artistServices.loadGermany();
  }

selectedChangeHandler (event){
  this.artist = [];
  this.artist = this.artistServices.loadSelectedCountry(event.target.value);
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
