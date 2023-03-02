import { createAction, props } from "@ngrx/store";
import { ArticlesResponseInterface } from "src/app/shared/types/articlesResponse.Interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { ActionTypes } from "../actionTypes";

export const getArticlesCountryAction = createAction(
  ActionTypes.GET_ARTICLES_COUNTRY,
  props<{
    q: string,
    country: string,
    sources: string,
    category: string,
    pageSize: number,
    page: number
  }>()
);

export const getArticlesCountrySuccesAction = createAction(
  ActionTypes.GET_ARTICLES_COUNTRY_SUCCESS,
  props<{ response: ArticlesResponseInterface }>()
);

export const getArticlesCountryFailureAction = createAction(
  ActionTypes.GET_ARTICLES_COUNTRY_FAILURE,
  props<{errors: BackendErrorsInterface}>()
)