import { ArticlesResponseInterface } from "./articlesResponse.Interface";
import { BackendErrorsInterface } from "./backendErrors.interface";

export interface ArticleStateInterface {
  isLoading: boolean;
  error: BackendErrorsInterface | null;
  data: ArticlesResponseInterface | null;
}