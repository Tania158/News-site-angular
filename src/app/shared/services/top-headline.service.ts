import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { createHttpParams } from "../helpers/paramsFunctions";
import { ArticlesResponseInterface } from "../types/articlesResponse.Interface";

@Injectable()
export class TopHeadlineArticlesService {

  constructor(private http: HttpClient) { }

  getTopHeadlineArticles(
    {
      q,
      country,
      sources,
      category,
      pageSize,
      page
    }: {
      q: string,
      country: string,
      sources: string,
      category: string,
      pageSize: number,
      page: number
      }): Observable<ArticlesResponseInterface> {
      const params = createHttpParams({ q, country, sources, category, pageSize, page });
      const url = environment.apiUrl + environment.topheadlines;

    return this.http.get<ArticlesResponseInterface>(url, {
        headers: new HttpHeaders({
          Authorization: environment.apiKey
        }),
        params
      })
    
  }
}