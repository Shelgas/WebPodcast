import { Component, OnInit, Input } from '@angular/core';
import { IPodcast } from '../_models/podcast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-podcast-card',
  templateUrl: './podcast-card.component.html',
  styleUrls: ['./podcast-card.component.css']
})
export class PodcastCardComponent implements OnInit {
  @Input() podcast: IPodcast;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goRoute(id: number) {
    this.router.navigate(['/podcast/', id]);
  }

}
