import { Component, Inject, inject } from '@angular/core';
import { AudioService } from '../services/audio.service';

@Component({
  selector: 'app-player',
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css',
  providers: [AudioService]
})
export class PlayerComponent {
  public songs = inject(AudioService);
  protected isEnabled = true;
  constructor(){
    console.log(this.songs.getTracks())
  } 

  play(index:number){this.songs.playTrack(index)}
  
}
