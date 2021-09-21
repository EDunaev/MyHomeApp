import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IncomeTO } from '../TOs/IncomeTO';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  uri = environment.finAppServer;
  constructor(private http: HttpClient) {}

  findAllIncomes() {
    return this.http.get(this.uri + '/api/incomes').pipe();
  }

  findIncomesByMonthId(id: number) {
    return this.http.get(this.uri + '/api/income?monthEntry.id=' + id).pipe();
  }

  findIncomeById(id: number) {
    return this.http.get(this.uri + '/api/income/' + id).pipe();
  }

  saveIncome(incomTo: IncomeTO) {
    return this.http.post(this.uri + '/api/income/', incomTo).pipe();
  }

  updateIncome(incomTo: IncomeTO) {
    return this.http.patch(this.uri + '/api/income/' + incomTo.id, incomTo).pipe();
  }

  deleteIncome(id: number){
    return this.http.delete(this.uri + '/api/income/' + id).pipe();
  }

}
