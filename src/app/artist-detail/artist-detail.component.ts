import { Track } from './../modelle/track';
import { Artist } from './../modelle/artist';
import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../modelle/album';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {

  @Input() artist: Artist;
  @Input() tracks:Track [] = [];
  @Input() alben:Album [] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
