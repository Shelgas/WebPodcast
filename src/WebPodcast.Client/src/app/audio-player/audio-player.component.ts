import { Component, OnInit, Input } from "@angular/core";
import { StreamState } from "../_models/streamState";
import { AudioService } from "../_services/audio.service";
import { Observable, Subscribable, Subscription, Subject } from "rxjs";
import { IRecords } from "../_models/record";
import { RecordService } from "../_services/record.service";
import { IAudio } from "../_models/audio";
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: "app-audio-player",
  templateUrl: "./audio-player.component.html",
  styleUrls: ["./audio-player.component.css"],
})
export class AudioPlayerComponent implements OnInit {
  @Input() record: IRecords;
  private stop$ = new Subject<boolean>();
  private state: StreamState;
  audio: Subscription;
  canActive = true;

  constructor(
    private audioService: AudioService,
    private recordService: RecordService
  ) { }

  ngOnInit() {
    localStorage.setItem('audio', 'notPlay');
  }

  loadAudio() {
    this.recordService.getAudio(+this.record.id).subscribe(
      (audio: IAudio) => {
        this.playStream("data:audio/mp3;base64," + audio.record);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  playStream(url) {
    this.audioService.playStream(url, this.record.id).subscribe();
  }

  async play() {
    this.canActive = false;
    if (localStorage.getItem('audio') === 'play' && this.state === undefined) {
      this.audioService.triggerOnMyButton();
    }
    await this.audioService.trigger$.subscribe(() => this.stop());
    localStorage.setItem('audio', 'play');
    if (this.state === undefined) {
      this.audioService.resetState();
      this.audio = this.audioService.getState().pipe(takeUntil(this.stop$)).subscribe((state) => {
        this.state = state;
      });
      this.loadAudio();
    }
    if (!this.state.canplay) {
      this.loadAudio();
    } else {
      this.audioService.play();
    }
  }

  stop() {
    this.canActive = true;
    this.audioService.stop();
    localStorage.setItem('audio', 'notPlay');
    this.audio.unsubscribe();
    this.state = undefined;
  }

  pause() {
    this.canActive = true;
    this.audioService.pause();
  }

  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }
}
