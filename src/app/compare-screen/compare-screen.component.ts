import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare-screen',
  templateUrl: './compare-screen.component.html',
  styleUrls: ['./compare-screen.component.scss']
})
export class CompareScreenComponent implements OnInit {

  name: string[] = []; 
  listener: string [] = [];
  playCount: string [] = [];
  published: string [] = [];
  summary: string[] = [];

  genre1: string[] = [];
  genre2: string[] = [];
  
  constructor(private http: HttpClient) { }

getValue(val: string){
    this.http
 .get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='+val+'&api_key=9de61f588c001cf9f09470d925434648&format=json')
 .subscribe((posts: any)=>{
   this.name[0] = posts.artist.name;
   this.listener[0] = posts.artist.stats.listeners;
   this.playCount[0] = posts.artist.stats.playcount;
   this.published[0] = posts.artist.bio.published;
   this.summary[0] = posts.artist.bio.summary;
   for(let i = 0; i<5; i++)
  {
    this.genre1[i] = posts.artist.tags.tag[i].name
  }
 });
}

getValue2(val: string){
  this.http
.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='+val+'&api_key=9de61f588c001cf9f09470d925434648&format=json')
.subscribe((posts: any)=>{
  this.name[1] = posts.artist.name;
  this.listener[1] = posts.artist.stats.listeners;
  this.playCount[1] = posts.artist.stats.playcount;
  this.published[1] = posts.artist.bio.published;
  this.summary[1] = posts.artist.bio.summary;
  for(let i = 0; i<5; i++)
  {
    this.genre2[i] = posts.artist.tags.tag[i].name
  }
  
});
}

  ngOnInit(): void {
  }

}
