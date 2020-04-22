import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPodcast } from '../_models/podcast';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getPodcasts(): Observable<IPodcast[]> {
  return this.http.get<IPodcast[]>(this.baseUrl + 'Podcast/');
}

getPodcast(id: number): Observable<IPodcast> {
  return this.http.get<IPodcast>(this.baseUrl + 'Podcast/' + id);
}

}
