import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OutputTO } from '../TOs/OutputTO';

@Injectable({
  providedIn: 'root'
})
export class OutputService {

  uri = environment.finAppServer;
  constructor(private http: HttpClient) { }


  findAllOutputs() {
    return this.http.get(this.uri + '/api/outputs').pipe();
  }

  findOutputsByMonthId(id: number) {
    return this.http.get(this.uri + '/api/output?monthEntryId.id=' + id).pipe();
  }

  findOutputById(id: number) {
    return this.http.get(this.uri + '/api/output/' + id).pipe();
  }

  saveOutput(output: OutputTO) {
    return this.http.post(this.uri + '/api/output', output).pipe();
  }

  updateOutput(output: OutputTO) {
    return this.http.patch(this.uri + '/api/output/' + output.id, output).pipe();
  }

  deleteOutput(id: number) {
    return this.http.delete(this.uri + '/api/output/' + id).pipe();
  }
}
