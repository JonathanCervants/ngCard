import { Component } from '@angular/core';
import { AudioService } from '../services/audio.service';

@Component({
  selector: 'app-player',
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  constructor(public audio:AudioService){
    console.log(audio.getTracks())
  }

  play(index:number){this.audio.playTrack(index)}
  
}
