import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RestCommunicatorComponent } from './rest-communicator/rest-communicator.component';
import { WindelschichtService } from './services/windelschicht.service';

@NgModule({
  declarations: [
    AppComponent,
    RestCommunicatorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [WindelschichtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
