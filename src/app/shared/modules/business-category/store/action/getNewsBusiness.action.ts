import { createAction, props } from "@ngrx/store";
import { ArticlesResponseInterface } from "src/app/shared/types/articlesResponse.Interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { ActionTypes } from "../actionTypes";

export const getNewsBusinessAction = createAction(
  ActionTypes.GET_NEWS_BUSINESS,
  props<{
    q: string,
    country: string,
    sources: string,
    category: string,
    pageSize: number,
    page: number
  }>()
);

export const getNewsBusinessSuccesAction = createAction(
  ActionTypes.GET_NEWS_BUSINESS_SUCCESS,
  props<{ response: ArticlesResponseInterface }>()
);

export const getNewsBusinessFailureAction = createAction(
  ActionTypes.GET_NEWS_BUSINESS_FAILURE,
  props<{errors: BackendErrorsInterface}>()
)