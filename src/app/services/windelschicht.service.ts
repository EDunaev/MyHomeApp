import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WindelschichtService {

  posts: any[];
  constructor(private http: Http) { }


  findAllShifts() {
    return this.http.get('http://192.168.178.28:7070/windelschicht-server/api/windel/')
      .pipe(map(response => {
        return response.json();
      }))
  }

  papa() {
    this.http.get('http://192.168.178.28:7070/windelschicht-server/api/windel/1')
    .subscribe(response => {});
    return this.findAllShifts();
  }
  mama() {
    this.http.get('http://192.168.178.28:7070/windelschicht-server/api/windel/2')
    .subscribe(response => {});
    return this.findAllShifts();
  }
}
