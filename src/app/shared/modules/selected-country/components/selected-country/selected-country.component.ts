import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { SelectedCountryService } from 'src/app/shared/services/selectedCountry.service';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { Article } from 'src/app/shared/types/article.interface';
import { ArticlesResponseInterface } from 'src/app/shared/types/articlesResponse.Interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { getArticlesCountryAction } from '../../store/action/getArticlesCountry.action';
import { articlesCountrySelector, errorCountrySelector, isLoadingCountrySelector } from '../../store/selectors';

@Component({
  selector: 'app-selected-country',
  templateUrl: './selected-country.component.html',
  styleUrls: ['./selected-country.component.scss']
})
export class SelectedCountryComponent implements OnInit, OnDestroy {

  selectedCountry!: string;
  selectedCountryName!: string;

  isLoading$!: Observable<boolean>;
  error$!: Observable<BackendErrorsInterface | null>;
  articlesResponseSubs!: Subscription;

  articlesResponse: Article[];

  q: string = '';
  country: string;
  sources: string = '';
  category: string = '';
  pageSize: number = 30;
  page: number = 1;

  constructor(
    private store: Store<AppStateInterface>,
    private route: ActivatedRoute,
    private selectedCountryService: SelectedCountryService
  ) { }

  ngOnDestroy(): void {
    this.articlesResponseSubs.unsubscribe();
  }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchData();
  }

  fetchData(): void {
    this.store.dispatch(getArticlesCountryAction(
      {
        q: '',
        country: this.country,
        sources: '',
        category: '',
        pageSize: this.pageSize,
        page: this.page
      }
    ));
  }

  initializeValues(): void {
    this.selectedCountry = this.route.snapshot.paramMap.get('country') || '';
    this.isLoading$ = this.store.pipe(select(isLoadingCountrySelector));
    this.error$ = this.store.pipe(select(errorCountrySelector));

    this.country = this.selectedCountryService.selectedCountryCode;
    this.selectedCountryName = this.selectedCountryService.selectedCountryName;
  }

  initializeListeners(): void {
    this.articlesResponseSubs = this.store
      .pipe(select(articlesCountrySelector))
      .subscribe((response: ArticlesResponseInterface | null) => {
        if (response?.articles) {
          this.articlesResponse = response?.articles;
        }
      }) 
  }

  domainName(url: string | null): string | null {
    if (!url) {
      return null;
    }

    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url;
  }
}
