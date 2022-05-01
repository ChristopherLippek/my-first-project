
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchArtistService {

  artist: string;

  searchArtist(name)
  {
    this.artist = name;
  }
}
