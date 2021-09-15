import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContentTableComponent } from './content-table/content-table.component';
import { WindelschichtService } from './services/windelschicht.service';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ChangeSchichtComponent } from './change-schicht/change-schicht.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MonthEntryService } from './services/month-entry.service';
import { FinanceappRootComponent } from './financeapp-root/financeapp-root.component';
import { IncomeService } from './services/income.service';
import { OutputService } from './services/output.service';
import { MainDeskComponent } from './financeapp-root/main-desk/main-desk.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { IncomeTableComponent } from './financeapp-root/income-table/income-table.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentTableComponent,
    HomeComponent,
    NavbarComponent,
    ChangeSchichtComponent,
    FinanceappRootComponent,
    MainDeskComponent,
    IncomeTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'windelschicht', component: ContentTableComponent },
      { path: 'finances', component: FinanceappRootComponent },
      { path: 'test', component: ChangeSchichtComponent },
      { path: '**', component: HomeComponent }
    ]),
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatCardModule,
    MatExpansionModule,
    FormsModule,
    MatGridListModule
  ],
  providers: [WindelschichtService, MonthEntryService, IncomeService, OutputService],
  bootstrap: [AppComponent]
})
export class AppModule { }
