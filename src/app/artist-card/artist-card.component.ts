import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {

  @Input() text:string ='';
  @Input() picture:string ='';
  @Input() listeners:string='';
  
  constructor() { }

  ngOnInit(): void {
  }

}
