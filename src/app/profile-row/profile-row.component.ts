import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss']
})
export class ProfileRowComponent implements OnInit {

  @Input() similar: string='';
  @Input() picture: string= '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
