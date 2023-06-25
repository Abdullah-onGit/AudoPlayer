import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('myplayer') myplayer: ElementRef<HTMLAudioElement>;
  get audioPlayer() {
    return this.myplayer.nativeElement;
  }
  timeList = [1, 2, 3, 5, 10]
  backwardTime = 10;
  forwardTime = 10;
  volumn = 50;
  selectedFiles = [];
  currentFileIndex = 0;

  ngAfterViewInit(): void {
    this.audioPlayer.onended = () => {
      if (this.currentFileIndex < this.selectedFiles.length - 1) {
        this.currentFileIndex++;
        this.play(this.currentFileIndex)
      }
    }
  }

  onSelect(event) {
    this.selectedFiles = event.target.files;
    this.play(0)//Play first file
  }

  forward() {
    console.log(this.forwardTime)
    this.audioPlayer.currentTime += this.forwardTime;
  }
  backward() {
    this.audioPlayer.currentTime -= this.backwardTime;
  }

  onVolumnChanges() {
    this.audioPlayer.volume = this.volumn / 100;
  }

  play(fileIndex: number) {
    this.currentFileIndex = fileIndex;
    this.audioPlayer.src = URL.createObjectURL(this.selectedFiles[fileIndex])
    this.audioPlayer.play();
  }
}
