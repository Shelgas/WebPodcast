import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { IPodcast } from "../_models/podcast";
import { PodcastService } from "../_services/podcast.service";
import { ActivatedRoute } from "@angular/router";
import { RecordService } from '../_services/record.service';
import { IRecords } from '../_models/record';

@Component({
  selector: "app-podcast-detail",
  templateUrl: "./podcast-detail.component.html",
  styleUrls: ["./podcast-detail.component.css"],
})
export class PodcastDetailComponent implements OnInit, AfterViewInit {
  podcast: IPodcast;
  records: IRecords[];
  srcData: string;

  constructor(
    private recordService: RecordService,
    private router: ActivatedRoute,
  ) {}

  ngAfterViewInit(): void {
    this.loadRecords();
  }

  ngOnInit() {
    this.router.data.subscribe(data => {
      this.podcast = data['podcast'];
      this.srcData = 'data:image/jpg;base64,' + this.podcast.photo;
    });
  }



  loadRecords() {
    this.recordService.getRecords(+this.router.snapshot.params["id"]).subscribe(
      (records: IRecords[]) => {
        this.records = records;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
