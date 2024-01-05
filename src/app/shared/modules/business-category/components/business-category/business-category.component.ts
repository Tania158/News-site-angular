import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { SelectedCountryService } from 'src/app/shared/services/selectedCountry.service';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { Article } from 'src/app/shared/types/article.interface';
import { ArticlesResponseInterface } from 'src/app/shared/types/articlesResponse.Interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { getNewsBusinessAction } from '../../store/action/getNewsBusiness.action';
import { isLoadingNewsBusinessSelector, errorNewsBusinessSelector, newsBusinessDataSelector } from '../../store/selectors';

@Component({
  selector: 'app-business-category',
  templateUrl: './business-category.component.html',
  styleUrls: ['./business-category.component.scss']
})
export class BusinessCategoryComponent implements OnInit, OnDestroy {

  selectedCountryName!: string;

  isLoading$!: Observable<boolean>;
  error$!: Observable<BackendErrorsInterface | null>;
  newsBusinessResponseSubs!: Subscription;

  newsBusinessResponse: Article[];
  activeStep = 'country';

  q: string;
  country: string;
  sources: string;
  category: string = 'business';
  pageSize: number = 30;
  page: number = 1;

  constructor(
    private store: Store<AppStateInterface>,
    private selectedCountryService: SelectedCountryService
  ) { }
  
  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchData();
  }

  ngOnDestroy(): void {
    this.newsBusinessResponseSubs.unsubscribe();
  }

  fetchData(): void {
    this.store.dispatch(getNewsBusinessAction(
      {
        q: '',
        country: this.country,
        sources: '',
        category: this.category,
        pageSize: this.pageSize,
        page: this.page
      }
    ));
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingNewsBusinessSelector));
    this.error$ = this.store.pipe(select(errorNewsBusinessSelector));

    this.country = this.selectedCountryService.get('countryCode');
    this.selectedCountryName = this.selectedCountryService.get('countryName');
  }

  initializeListeners(): void {
    this.newsBusinessResponseSubs = this.store
      .pipe(select(newsBusinessDataSelector))
      .subscribe((response: ArticlesResponseInterface | null) => {
        if (response?.articles) {
          this.newsBusinessResponse = response?.articles;
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
    url = url.replace(",", '');

    return url.split('/')[0];
  }

  getNewsBusiness(step: string): void {
    this.activeStep = step;
    if (step === 'world') {
      this.country = '';
      this.fetchData();
    } else {
      this.ngOnInit();
    }
  }
}
