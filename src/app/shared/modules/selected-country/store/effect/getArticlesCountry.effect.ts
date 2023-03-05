import { Injectable } from "@angular/core";
import { TopHeadlineArticlesService } from "src/app/shared/services/top-headline.service";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { getArticlesCountryAction, getArticlesCountryFailureAction, getArticlesCountrySuccesAction } from "../action/getArticlesCountry.action";
import { catchError, map, of, switchMap } from "rxjs";
import { ArticlesResponseInterface } from "src/app/shared/types/articlesResponse.Interface";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class GetArticlesCountryEffect {

  constructor(
    private topHeadlineArticlesService: TopHeadlineArticlesService,
    private actions$: Actions
  ) { }
  
  getArticlesCountry$ = createEffect(() => 
    this.actions$.pipe(
      ofType(getArticlesCountryAction),
      switchMap(({ q, country, sources, category, pageSize, page }) => {
        return this.topHeadlineArticlesService.getTopHeadlineArticles(
          { q, country, sources, category, pageSize, page }
        ).pipe(
          map((response: ArticlesResponseInterface) => {
            return getArticlesCountrySuccesAction({ response });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getArticlesCountryFailureAction({errors: errorResponse.error}));
          })
        )
      })
    )
  )
}