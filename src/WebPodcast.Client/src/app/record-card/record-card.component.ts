import { Component, OnInit, Input } from '@angular/core';
import { IRecords } from '../_models/record';

@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.css']
})
export class RecordCardComponent implements OnInit {
  @Input() record: IRecords;
  dateHandling: number;


  constructor() { }

  ngOnInit() {
  }

}
