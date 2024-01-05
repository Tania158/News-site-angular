import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BusinessCategoryComponent } from './components/business-category/business-category.component';
import { TopHeadlineArticlesService } from "../../services/top-headline.service";
import { RouterModule } from "@angular/router";
import { BackendErrorMessagesModule } from "../backendErrorMessages/backendErrorMessages.module";
import { MaterialModule } from "../../material/material.module";
import { LoadingModule } from "../loading/loading.module";
import { EffectsModule } from "@ngrx/effects";
import { GetNewsBusinessEffect } from "./store/effect/getNewsBusiness.effect";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store/reducers";

const routes = [
  {
    path: 'topics/business',
    component: BusinessCategoryComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetNewsBusinessEffect]),
    StoreModule.forFeature('newsBusiness', reducers),
    MaterialModule,
    BackendErrorMessagesModule,
    LoadingModule
  ],
  declarations: [BusinessCategoryComponent],
  providers: [TopHeadlineArticlesService]
})
export class BusinessCategoryModule {}