import { Injectable } from '@angular/core';
import {Howl} from 'howler'
@Injectable({providedIn: 'root'})
export class AudioService {
  private sound?: Howl;
  private tracks = [
  { 
    title: 'Happy Birthday', 
    artist: 'Traditional', 
    url: 'EVAS.mp3' // Replace with actual URL
  },
  { 
    title: 'Happy Birthday', 
    artist: 'Traditional', 
    url: 'EVAS.mp3' // Replace with actual URL
  }
  ]

  example =  [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 3, name: 'Jessica'}, {id: 4, name: 'Poornima'}]

  currentTrackIndex = 0

  constructor(){console.log(this.example);}
  playTrack(index:number){
    this.sound = this.sound?.stop()
    this.currentTrackIndex = index;
    this.sound = new Howl({
      src: [this.tracks[index].url],
      html5: true,
      volume: 0.8 
    });
    this.sound.play();
  }
  getTracks(){
   return console.log(this.example) }
}