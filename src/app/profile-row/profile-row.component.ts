import { FriendService } from './../friend.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss']
})
export class ProfileRowComponent implements OnInit {

  @Input() similar: string='';
  @Input() picture: string= '';
  
  constructor(public fs: FriendService) { }

  ngOnInit(): void {
  }

}
