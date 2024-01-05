import { routerNavigationAction } from "@ngrx/router-store";
import { Action, createReducer, on } from "@ngrx/store"
import { ArticleStateInterface } from "src/app/shared/types/articleState.interface"
import { getNewsBusinessAction, getNewsBusinessSuccesAction, getNewsBusinessFailureAction } from './action/getNewsBusiness.action';

const initialState: ArticleStateInterface = {
  isLoading: false,
  error: null,
  data: null
}

const newsBusinessReducer = createReducer(
  initialState,
  on(
    getNewsBusinessAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: true,
      error: null,
    })
  ),
  on(
    getNewsBusinessSuccesAction,
    (state, action): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      data: action.response,
      error: null,
    })
  ),
  on(
    getNewsBusinessFailureAction,
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
  return newsBusinessReducer(state, action)
}