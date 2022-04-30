import { FriendService } from './../friend.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss']
})
export class ProfileRowComponent implements OnInit {

  @Input() text:string='Luna'
  @Input() age:string='1,5'
  @Input() picture:string='/assets/img/cat/1.jpg'
  @Input() canFllow = true
  
  constructor(public fs: FriendService) { }

  ngOnInit(): void {
  }

}
