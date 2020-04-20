import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { IPodcast } from '../_models/podcast';
import { PodcastService } from '../_services/podcast.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PodcastResolver implements Resolve<IPodcast[]> {

    constructor(private podcastService: PodcastService, private router: Router, private http: HttpClient) { }

    resolve(route: ActivatedRouteSnapshot): Observable<IPodcast[]> {
        return this.podcastService.getPodcasts().pipe(
            catchError(error => {
                console.log('Problem retrieving data');
                return of(null);
            })
        );
    }
}

