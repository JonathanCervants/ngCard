import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AudioService {
  private tracks = [
  {}
  ]
  currentTrackIndex = 0
  constructor() {

   }
}
