import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/types/appState.interface";
import { ArticleStateInterface } from "src/app/shared/types/articleState.interface";

export const articlesCountryFeatureSelector = (
  state: AppStateInterface
): ArticleStateInterface => state.articlesCountry;

export const isLoadingCountrySelector = createSelector(
  articlesCountryFeatureSelector,
  (articlesCountryState: ArticleStateInterface) => articlesCountryState.isLoading
);

export const errorCountrySelector = createSelector(
  articlesCountryFeatureSelector,
  (articlesCountryState: ArticleStateInterface) => articlesCountryState.error
);

export const articlesCountrySelector = createSelector(
  articlesCountryFeatureSelector,
  (articlesCountryState: ArticleStateInterface) => articlesCountryState.data
);