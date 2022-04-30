import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent implements OnInit {

  @Input() text:string ='';
  @Input() picture:string ='';
  @Input() listeners:string='';
  
  constructor() { }

  ngOnInit(): void {
  }

}
