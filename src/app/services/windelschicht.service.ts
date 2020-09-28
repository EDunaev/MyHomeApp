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

  //todo add error handling 
  findAllShifts() {
    return this.http.get(this.uri + '/api/windel/').pipe();
  }

  papa() {
    return this.http.get(this.uri + '/api/windel/1').pipe();
  }
  mama() {
    return this.http.get(this.uri + '/api/windel/2').pipe();
  }
  delete(id: Number) {
    return this.http.delete(this.uri + '/api/windel/' + id).pipe();
  }
}
