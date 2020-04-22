import { Component, OnInit } from '@angular/core';
import { IPodcast } from '../_models/podcast';
import { PodcastService } from '../_services/podcast.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent implements OnInit {
  podcasts: IPodcast[];

  constructor(private podcastService: PodcastService,
     private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.data.subscribe(data => {
      this.podcasts = data['podcasts'];
    });
  }

}
