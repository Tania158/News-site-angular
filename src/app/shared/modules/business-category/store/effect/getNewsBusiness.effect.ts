import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { TopHeadlineArticlesService } from "src/app/shared/services/top-headline.service";
import { ArticlesResponseInterface } from "src/app/shared/types/articlesResponse.Interface";
import { getNewsBusinessAction, getNewsBusinessSuccesAction, getNewsBusinessFailureAction } from '../action/getNewsBusiness.action';

@Injectable()
export class GetNewsBusinessEffect {

  constructor(
    private topHeadlineArticlesService: TopHeadlineArticlesService,
    private actions$: Actions
  ) { }
  
  getNewsBusiness$ = createEffect(() => 
    this.actions$.pipe(
      ofType(getNewsBusinessAction),
      switchMap(({ q, country, sources, category, pageSize, page }) => {
        return this.topHeadlineArticlesService.getTopHeadlineArticles(
          { q, country, sources, category, pageSize, page }
        ).pipe(
          map((response: ArticlesResponseInterface) => {
            return getNewsBusinessSuccesAction({ response });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getNewsBusinessFailureAction({errors: errorResponse.error}));
          })
        )
      })
    )
  )
}
