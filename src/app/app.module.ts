import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {CouterModule} from "./Counter/couter.module"
import { HeroesModule } from './Heroes/heroes.module';
import {DbzModule} from "./dbz/dbz.module"


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CouterModule,
    HeroesModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
