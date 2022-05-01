import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  names = [];

  catPictures =[];

    text = [];
  constructor() { }

  addFriend(name, img)
  {
    this.names.push(name);
    this.catPictures.push(img)
    
  }
}
