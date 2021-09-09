import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MonthEntryService {
  uri = environment.server;
  constructor(private http: HttpClient) { }


  findAllMonthEntries() {
    return this.http.get(this.uri + '/api/month-entry').pipe();
  }
}
