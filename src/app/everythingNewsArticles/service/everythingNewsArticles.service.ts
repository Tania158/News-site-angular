import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { createHttpParams } from "src/app/shared/helpers/paramsFunctions";
import { ArticlesResponseInterface } from "src/app/shared/types/articlesResponse.Interface";
import { environment } from '../../../environments/environment';

@Injectable()
export class EverythingNewsArticleService {
  
  constructor(private http: HttpClient) { }
  
  // getEverythingArticles(
  //   {
  //     q,
  //     searchIn,
  //     sources,
  //     domains,
  //     excludeDomains,
  //     from,
  //     to,
  //     language,
  //     sortBy,
  //     pageSize,
  //     page
  //   }: {
  //     q: string,
  //     searchIn: string,
  //     sources: string,
  //     domains: string,
  //     excludeDomains: string,
  //     from: string,
  //     to: string,
  //     language: string,
  //     sortBy: string,
  //     pageSize: number,
  //     page: number
  //     }): Observable<ArticlesResponseInterface> {
  //     const params = createHttpParams({ q, searchIn, sources, domains, excludeDomains, from, to, language, sortBy, pageSize, page });
  //     const url = environment.apiUrl + environment.everything;

  //   return this.http.get<ArticlesResponseInterface>(url, {
  //       headers: new HttpHeaders({
  //         'Content-Type': 'application/json',
  //         Authorization: environment.apiKey
  //       }),
  //       params
  //     })
    
  // }

  getEverythingArticles(): Observable<ArticlesResponseInterface> {
      const url = environment.apiUrl + environment.top_headlines_sources + '?q=kyiv';

    return this.http.get<ArticlesResponseInterface>(url, {
        headers: new HttpHeaders({
          Authorization: environment.apiKey
        })
      })
    
  }
}