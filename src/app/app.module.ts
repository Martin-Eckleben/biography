import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// uirouter
import { UIRouterModule } from "@uirouter/angular";

// configs
import { uiRouterStates } from '@configuration/router-states';

// flexlayout
import { FlexLayoutModule } from '@angular/flex-layout';

// layout components
import { PageThreeRowComponent } from '@component/page-three-row/page-three-row.component';
import { NavigationComponent } from '@component/navigation/navigation.component';
import { MainLogoComponent } from '@component/main-logo/main-logo.component';
import { HeaderComponent } from '@component/header/header.component';
import { FooterComponent } from '@component/footer/footer.component';
import { FrontpageComponent } from '@component/frontpage/frontpage.component'

@NgModule({
  declarations: [
    AppComponent,
    PageThreeRowComponent,
    NavigationComponent,
    MainLogoComponent,
    HeaderComponent,
    FooterComponent,
    FrontpageComponent,
  ],
  imports: [
    BrowserModule,

    UIRouterModule.forRoot({
      states: uiRouterStates,
      otherwise: {state:'bio.main.home'}
    }),

    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
