import { HttpClient } from '@angular/common/http';
import { SearchArtistService } from './../search-artist.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();

  value: string = ''; 
  message: string;

  constructor(private http: HttpClient) {
   }

  getValue(val: string){
    this.http
 .get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='+val+'&api_key=9de61f588c001cf9f09470d925434648&format=json')
 .subscribe((posts: any)=>{
   alert(posts.artist.stats.listeners)
 });
    
}

sendMessage(message) {
  message = "wichtig";
  this.messageEvent.emit(message)
}
  

  ngOnInit(): void {
  }

}
