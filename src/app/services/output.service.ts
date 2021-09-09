import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OutputService {

  uri = environment.server;
  constructor(private http: HttpClient) { }


  findAllOutputs() {
    return this.http.get(this.uri + '/api/output').pipe();
  }
}
