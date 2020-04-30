import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { IRecords } from '../_models/record';
import { RecordService } from '../_services/record.service';
import { IAudio } from '../_models/audio';

@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.css']
})
export class RecordCardComponent implements OnInit {
  @Input() record: IRecords;
  dateHandling: number;
  audio: string;


  constructor(private recordService: RecordService) { }

  ngOnInit() {
  }


  loadAudio() {
    this.recordService.getAudio(+this.record.id).subscribe(
      (audio: IAudio) => {
        this.audio = "data:audio/mp3;base64," + audio.record;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
