import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WindelschichtService {
  uri = environment.server;
  constructor(private http: Http) { }


  findAllShifts() {
    return this.http.get(this.uri + '/api/windel/')
      .pipe(map(response => {
        console.log(response);
        console.log(response.json());
        
        return response.json();
      }))
  }

  papa() {
    return this.http.get(this.uri + '/api/windel/1')
    .pipe(map(response => {
      return response.json();
    }))
  }
  mama() {
    return this.http.get(this.uri + '/api/windel/2')
    .pipe(map(response => {
      return response.json();
    }))
  }
  delete(id: Number) {
    return this.http.delete(this.uri + '/api/windel/' + id)
    .pipe(map(response => {
      return response.text();
    }))
  }
}
