import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WindelschichtService {
  uri = environment.server;
  constructor(private http: HttpClient) { }


  findAllShifts() {
    return this.http.get(this.uri + '/api/windel/')
      .pipe(map(response => {
        console.log(response);
        console.log(response);
        
        return response;
      }))
  }

  papa() {
    return this.http.get(this.uri + '/api/windel/1')
    .pipe(map(response => {
      return response;
    }))
  }
  mama() {
    return this.http.get(this.uri + '/api/windel/2')
    .pipe(map(response => {
      return response;
    }))
  }
  delete(id: Number) {
    return this.http.delete(this.uri + '/api/windel/' + id)
    .pipe(map(response => {
      return response;
    }))
  }
}
