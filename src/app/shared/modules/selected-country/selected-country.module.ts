import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SelectedCountryComponent } from './components/selected-country/selected-country.component';
import { RouterModule } from "@angular/router";
import { GetArticlesCountryEffect } from "./store/effect/getArticlesCountry.effect";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { reducers } from './store/reducers';
import { TopHeadlineArticlesService } from "../../services/top-headline.service";
import { MaterialModule } from '../../material/material.module';
import { BackendErrorMessagesModule } from "../backendErrorMessages/backendErrorMessages.module";
import { LoadingModule } from "../loading/loading.module";

const routes = [
  {
    path: 'articles/:country',
    component: SelectedCountryComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetArticlesCountryEffect]),
    StoreModule.forFeature('articlesCountry', reducers),
    MaterialModule,
    BackendErrorMessagesModule,
    LoadingModule
  ],
  declarations: [
    SelectedCountryComponent
  ],
  providers: [TopHeadlineArticlesService]
})
export class SelectedCountryModule {}