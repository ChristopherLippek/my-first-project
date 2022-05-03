import { HttpClient } from '@angular/common/http';
import { SimilarArtist } from './../modelle/similar-artist';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimilarArtistSearchService {

  similarArtist: SimilarArtist[] = []; 
  constructor(private http: HttpClient) { }

  loadSimilarArtist(name: string)
  {
      this.http
     .get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='+name+'&api_key=9de61f588c001cf9f09470d925434648&format=json')
     .subscribe((posts: any)=>{
       for(let i = 0;i<5;i++)
       {
         this.similarArtist[i] = posts.artist.similar.artist[i];
       }
      
    });
    return this.similarArtist;
  }
}
