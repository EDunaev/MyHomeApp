import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContentTableComponent } from './content-table/content-table.component';
import { WindelschichtService } from './services/windelschicht.service';
import { ControlContentComponent } from './control-content/control-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentTableComponent,
    ControlContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WindelschichtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
