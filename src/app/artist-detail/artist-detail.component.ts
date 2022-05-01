import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {

  @Input() name:string ='';
  @Input() listeners:string ='';
  @Input() playcount:string ='';
  @Input() tracks:string [] = [];
  @Input() alben:string [] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
