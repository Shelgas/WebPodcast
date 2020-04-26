import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IRecords } from '../_models/record';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getRecords(id: number): Observable<IRecords[]> {
  return this.http.get<IRecords[]>(this.baseUrl + 'Record/' + id);
}

}
