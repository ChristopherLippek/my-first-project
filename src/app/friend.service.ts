import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  names = [];
  catPictures =[];
  text = [];

  constructor() { }

  addFriend(name, text, img)
  {
    this.names.push(name);
    this.text.push(text);
    this.catPictures.push(img)
    
  }
}
