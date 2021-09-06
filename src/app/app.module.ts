import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    ContentTableComponent,
    HomeComponent,
    NavbarComponent,
    ChangeSchichtComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path : '', component: HomeComponent},
      { path : 'windelschicht', component: ContentTableComponent},
      { path : 'finances', component: ChangeSchichtComponent},
      { path : '**', component: HomeComponent}
    ]),
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatCardModule,
    MatExpansionModule
  ],
  providers: [WindelschichtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
