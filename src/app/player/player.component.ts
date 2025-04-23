import { Component, Inject, computed, inject, signal } from '@angular/core';
import { AudioService } from '../services/audio.service';

@Component({
  selector: 'app-player',
  imports: [],
  template: `<button [disabled]="isValidUserId()">Save changes</button>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
  (click)="cancelSubscription($event)">Cancel subscription</button>`,
  // templateUrl: './player.component.html',
  styleUrl: './player.component.css',
  providers: [AudioService],
  
})

export class PlayerComponent {
  /* ... */
  cancelSubscription(event:Event) { console.log("hello GA")/* Your event handling code goes here. */  }

  isValidUserId= signal(false);
  
  public songs = inject(AudioService);
  protected isEnabled = true;
  constructor(){
    const firstName = signal('Morgan');
    const firstNameCapitalized  = computed(() => firstName().toUpperCase());
    console.log(firstNameCapitalized());
    console.log(this.songs.getTracks())
  } 

 
  play(index:number){
   this.songs.playTrack(index)}
 
}

