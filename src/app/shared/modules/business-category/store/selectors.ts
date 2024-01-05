import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/types/appState.interface";
import { ArticleStateInterface } from "src/app/shared/types/articleState.interface";

export const newsBusinessFeatureSelector = (
  state: AppStateInterface
): ArticleStateInterface => state.newsBusiness;

export const isLoadingNewsBusinessSelector = createSelector(
  newsBusinessFeatureSelector,
  (newsBusinessState: ArticleStateInterface) => newsBusinessState.isLoading
);

export const errorNewsBusinessSelector = createSelector(
  newsBusinessFeatureSelector,
  (newsBusinessState: ArticleStateInterface) => newsBusinessState.error
);

export const newsBusinessDataSelector = createSelector(
  newsBusinessFeatureSelector,
  (newsBusinessState: ArticleStateInterface) => newsBusinessState.data
);