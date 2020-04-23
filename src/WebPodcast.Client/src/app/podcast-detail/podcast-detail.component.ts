import { Component, OnInit } from "@angular/core";
import { IPodcast } from "../_models/podcast";
import { PodcastService } from "../_services/podcast.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-podcast-detail",
  templateUrl: "./podcast-detail.component.html",
  styleUrls: ["./podcast-detail.component.css"],
})
export class PodcastDetailComponent implements OnInit {
  podcast: IPodcast;
  srcData: string;

  constructor(
    private podcastService: PodcastService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.loadPodcast();
  }

  loadPodcast() {
    this.podcastService.getPodcast(+this.route.snapshot.params["id"]).subscribe(
      (podcast: IPodcast) => {
        this.podcast = podcast;
        this.srcData = 'data:image/jpg;base64,' + podcast.photo;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
}
