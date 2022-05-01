import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit {

  @Input() similar: string[] = [];
  @Input() picture: string[] = [];

  names = ['Luna', 'Aska', 'Rudy', 'Fin', "Prinz"]
  catPictures =[
    "assets/img/cat/1.jpg",
    "assets/img/cat/2.jpg",
    "assets/img/cat/3.jpg",
    "assets/img/cat/4.jpg",
    "assets/img/cat/5.jpg"]
  age = ['1,5', '2,5', '1', '4', "5"]
  constructor() { }

  ngOnInit(): void {
  }

}
