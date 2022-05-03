import { HttpClient } from '@angular/common/http';
import { Artist } from '../modelle/artist';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistSearchService {

  artist: Artist [] = [];
  constructor(private http: HttpClient) {
   }


  loadGermany(){
    this.http
  .get('http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=germany&api_key=9de61f588c001cf9f09470d925434648&format=json')
  .subscribe((posts: any)=>{
      for(let i = 0; i<10; i++){this.artist.push(posts.topartists.artist[i]);}});
  return this.artist;
}

loadSelectedCountry(name: string){
  this.artist = [];
  this.http
  .get('http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country='+''+name+''+'&api_key=9de61f588c001cf9f09470d925434648&format=json')
  .subscribe((posts: any)=>{
    for(let i = 0; i<10; i++){this.artist.push(posts.topartists.artist[i]);}});
    return this.artist;
}
}
