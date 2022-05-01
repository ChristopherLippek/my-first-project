import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistServicesService {

  name: string[];
  listner: string[];
  picture: string[];

  constructor(private http: HttpClient) {  
    this.http
  .get('http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=germany&api_key=9de61f588c001cf9f09470d925434648&format=json')
  .subscribe((posts: any)=>{
    for(let i = 0; i<10; i++)
    {
      this.name.push(posts.topartists.artist.name);
      this.listner.push(posts.topartists.artist.listeners);    
      this.picture.push(posts.topartists.artist.image);
    }
});
}
}

