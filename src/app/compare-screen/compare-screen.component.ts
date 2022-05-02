import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare-screen',
  templateUrl: './compare-screen.component.html',
  styleUrls: ['./compare-screen.component.scss']
})
export class CompareScreenComponent implements OnInit {

  constructor(private http: HttpClient) { }

getValue(val: string){
    this.http
 .get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='+val+'&api_key=9de61f588c001cf9f09470d925434648&format=json')
 .subscribe((posts: any)=>{
   alert(posts.artist.stats.listeners)
 });
}

getValue2(val: string){
  this.http
.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='+val+'&api_key=9de61f588c001cf9f09470d925434648&format=json')
.subscribe((posts: any)=>{
 alert(posts.artist.stats.listeners)
});
}

  ngOnInit(): void {
  }

}
