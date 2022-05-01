import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {

  @Input() summary:string ='';
  @Input() published:string ='';
  @Input() content:string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
