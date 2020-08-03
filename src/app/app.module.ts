import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageThreeRowComponent } from './component/page-three-row/page-three-row.component';
import { NavigationComponent } from './component/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    PageThreeRowComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
