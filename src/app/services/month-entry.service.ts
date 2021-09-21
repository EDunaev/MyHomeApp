import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MonthEntryTO } from '../TOs/MonthEntryTO';

@Injectable({
  providedIn: 'root'
})
export class MonthEntryService {
  uri = environment.finAppServer;
  constructor(private http: HttpClient) { }


  findAllMonthEntries() {
    return this.http.get(this.uri + '/api/month-entry').pipe();
  }

  findMonthEntryById(id: number) {
    return this.http.get(this.uri + '/api/month-entry/' + id).pipe();
  }

  saveMonthEntry(monthEntryTo: MonthEntryTO) {
    return this.http.post(this.uri + '/api/month-entry', monthEntryTo).pipe();
  }

  updateMonthEntry(monthEntryTo: MonthEntryTO) {
    return this.http.patch(this.uri + '/api/month-entry/' + monthEntryTo.id, monthEntryTo).pipe();
  }

  deleteMonthEntry(id: number){
    return this.http.delete(this.uri + '/api/month-entry/' + id).pipe();
  }
}
