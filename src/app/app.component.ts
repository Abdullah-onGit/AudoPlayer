import { Component, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('myplayer') myplayer: ElementRef<HTMLAudioElement>;
  get audioPlayer() {
    return this.myplayer.nativeElement;
  }
  timeList = [1, 2, 3, 5, 10]
  backwardTime = 10;
  forwardTime = 10;
  onSelect(event) {
    this.myplayer.nativeElement.src = URL.createObjectURL(event.target.files[0])
    this.myplayer.nativeElement.play();
  }

  forward() {
    console.log(this.forwardTime)
    this.audioPlayer.currentTime += this.forwardTime;
  }
  backward() {
    this.audioPlayer.currentTime -= this.backwardTime;
  }
}
