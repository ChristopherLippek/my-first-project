import { HttpClient } from '@angular/common/http';
import { Artist } from './../modelle/artist';
import { Album } from './../modelle/album';
import { Track } from './../modelle/track';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailArtistSearchService {

  track: Track [] = []; 
  album: Album [] = [];
  artist: Artist = new Artist();

  constructor(private http: HttpClient) { }
  
  loadAlbums(name: string)
  {
    this.http
    .get('https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist='+name+'&api_key=9de61f588c001cf9f09470d925434648&format=json')
    .subscribe((posts: any)=>{
      for(let i = 0; i<5; i++)
      {
        this.album[i] = posts.topalbums.album[i];
      }});

    return this.album;
  }
  
  loadTracks(name:string){
    this.http
    .get('http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist='+name+'&api_key=9de61f588c001cf9f09470d925434648&format=json')
    .subscribe((posts: any)=>{
  
     for(let i = 0; i<5; i++)
     {
       this.track[i] = posts.toptracks.track[i];
     }
  
    });

    return this.track;
  }

onSelectedArtist(name: string){
  this.http
 .get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='+name+'&api_key=9de61f588c001cf9f09470d925434648&format=json')
 .subscribe((posts: any)=>{
  this.artist.name = posts.artist.name;
  this.artist.listeners = posts.artist.stats.listeners;
  this.artist.playcount = posts.artist.stats.playcount;
});
return this.artist;
}

}
