import { isDevMode, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalPageModule } from './globalPage/globalPage.module';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { HeaderModule } from './header/header.module';
import { MaterialModule } from './shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterModule } from './footer/footer.module';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { SelectedCountryModule } from './shared/modules/selected-country/selected-country.module';
import { EffectsModule } from '@ngrx/effects';
import { EverythingNewsArticlesModule } from './everythingNewsArticles/everythingNewsArticles.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ router: routerReducer }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    GlobalPageModule,
    HeaderModule,
    FooterModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxScrollTopModule,
    SelectedCountryModule,
    EverythingNewsArticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
