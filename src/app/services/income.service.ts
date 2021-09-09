import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  uri = environment.server;
  constructor(private http: HttpClient) {}

  findAllIncomes() {
    return this.http.get(this.uri + '/api/income').pipe();
  }
}
