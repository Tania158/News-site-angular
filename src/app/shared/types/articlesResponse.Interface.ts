import { Article } from "./article.interface";

export interface ArticlesResponseInterface {
  status: string;
  totalResults: number;
  articles: Article[];
}