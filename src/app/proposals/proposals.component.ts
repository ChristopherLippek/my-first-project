import { SimilarArtist } from './../modelle/similar-artist';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit {

  @Input() similar: SimilarArtist[];

  constructor() { }

  ngOnInit(): void {
  }

}
