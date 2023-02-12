import { Component, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('myplayer') myplayer: ElementRef<HTMLAudioElement>;
  get audioPlayer(){
    return this.myplayer.nativeElement;
  }
  onSelect(event) {
    this.myplayer.nativeElement.src = URL.createObjectURL(event.target.files[0])
  }

  forward(){
    this.audioPlayer.currentTime += 10;
  }
  backward(){
    this.audioPlayer.currentTime -= 10;
  }
}
