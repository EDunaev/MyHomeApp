import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { OutputTableComponent } from './financeapp-root/output-table/output-table.component';
import { WavesModule, IconsModule, ButtonsModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatInputModule } from '@angular/material/input';
import { CreateOutputDialogComponent } from './financeapp-root/create-output-dialog/create-output-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    ContentTableComponent,
    HomeComponent,
    NavbarComponent,
    ChangeSchichtComponent,
    FinanceappRootComponent,
    MainDeskComponent,
    IncomeTableComponent,
    OutputTableComponent,
    CreateOutputDialogComponent
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
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatExpansionModule,
    FormsModule, 
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    WavesModule,
    IconsModule,
    ButtonsModule,
  ],
  providers: [WindelschichtService, MonthEntryService, IncomeService, OutputService],
  bootstrap: [AppComponent]
})
export class AppModule { }
