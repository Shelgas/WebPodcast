import { Component, OnInit, Input } from '@angular/core';
import { IPodcast } from '../_models/podcast';

@Component({
  selector: 'app-podcast-card',
  templateUrl: './podcast-card.component.html',
  styleUrls: ['./podcast-card.component.css']
})
export class PodcastCardComponent implements OnInit {
  @Input() podcast: IPodcast;

  constructor() { }

  ngOnInit() {
  }

}
