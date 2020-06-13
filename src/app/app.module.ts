import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RacesComponent } from './races/races.component';
import { PoniesComponent } from './ponies/ponies.component';

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    PoniesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
