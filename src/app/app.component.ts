import { SimilarArtist } from './modelle/similar-artist';
import { SimilarArtistSearchService } from './services/similar-artist-search.service';
import { DetailArtistSearchService } from './services/detail-artist-search.service';
import { ArtistSearchService } from './services/artist-search.service';
import { Artist } from './modelle/artist';
import { HeaderComponent } from './header/header.component';
import { HttpClient } from '@angular/common/http';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { interval, map, startWith } from 'rxjs';
import { Track } from './modelle/track';
import { Album } from './modelle/album';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  
  selctedCountry: string = '';
  selectedArtist: string = "";

  constructor(private http: HttpClient, private artistServices: ArtistSearchService, private artistDetails: DetailArtistSearchService, private searchSimilarArtist: SimilarArtistSearchService){ 
    this.defaultArtistList();
}
  nearlyArtist: SimilarArtist[] = [];
  imageUrl$: any;
  similar: string[] = [];
  pic: string[] = [];

  artist: Artist [] = [];
  detailArtist: Artist; 
  track: Track[] = [];
  album: Album [] = [];
  
  buttonSignalFromHeader: string; 

  posts: any [] = [];

  countries: string[] = ["germany", "france", "spain"];

defaultArtistList(){
    this.artist = this.artistServices.loadGermany();
  }

selectedChangeHandler (event){
  this.artist = [];
  this.artist = this.artistServices.loadSelectedCountry(event.target.value);
}


onSelectedArtist(name: string)
{
  this.selectedArtist = name;
  this.track = this.artistDetails.loadTracks(name);
  this.album = this.artistDetails.loadAlbums(name);
  this.detailArtist = this.artistDetails.onSelectedArtist(name); 
  this.nearlyArtist = this.searchSimilarArtist.loadSimilarArtist(name);
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
