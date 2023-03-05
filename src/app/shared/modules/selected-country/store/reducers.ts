import { routerNavigationAction } from "@ngrx/router-store";
import { Action, createReducer, on } from "@ngrx/store";
import { ArticleStateInterface } from "src/app/shared/types/articleState.interface";
import { getArticlesCountryAction, getArticlesCountryFailureAction, getArticlesCountrySuccesAction } from "./action/getArticlesCountry.action";

const initialState: ArticleStateInterface = {
  isLoading: false,
  error: null,
  data: null
}

const articleReducer = createReducer(
  initialState,
  on(
    getArticlesCountryAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: true,
      error: null,
    })
  ),
  on(
    getArticlesCountrySuccesAction,
    (state, action): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      data: action.response,
      error: null,
    })
  ),
  on(
    getArticlesCountryFailureAction,
    (state, action): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      error: action.errors
    })
  ),
  on(
    routerNavigationAction, (): ArticleStateInterface => initialState
  )
)

export function reducers(state: ArticleStateInterface, action: Action) {
  return articleReducer(state, action)
}