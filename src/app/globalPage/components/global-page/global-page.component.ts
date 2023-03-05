import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getArticlesCountryAction } from 'src/app/shared/modules/selected-country/store/action/getArticlesCountry.action';
import { articlesCountrySelector, errorCountrySelector, isLoadingCountrySelector } from 'src/app/shared/modules/selected-country/store/selectors';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { ArticlesResponseInterface } from 'src/app/shared/types/articlesResponse.Interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { CountriesCode } from '../../countriesCode/countriesCode';

@Component({
  selector: 'app-global-page',
  templateUrl: './global-page.component.html',
  styleUrls: ['./global-page.component.scss']
})
export class GlobalPageComponent implements OnInit {

  articles$!: Observable<ArticlesResponseInterface | null>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<BackendErrorsInterface | null>;

  pageSize: number;
  page: number;

  selectedCountry = 'us';
  countries = CountriesCode;

  constructor(private store: Store<AppStateInterface>) { }
  
  ngOnInit(): void {
    this.fetchData();
    this.initializeValues();
  }

  fetchData(): void {
    this.store.dispatch(getArticlesCountryAction(
      {
        q: '',
        country: this.selectedCountry,
        sources: '',
        category: '',
        pageSize: null,
        page: null
      }
    ));
  }

  initializeValues(): void {
    this.articles$ = this.store.pipe(select(articlesCountrySelector));
    this.isLoading$ = this.store.pipe(select(isLoadingCountrySelector));
    this.error$ = this.store.pipe(select(errorCountrySelector));
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

  applyFilter(): void {
    this.store.dispatch(getArticlesCountryAction(
      {
        q: '',
        country: this.selectedCountry,
        sources: '',
        category: '',
        pageSize: null,
        page: null
      }
    ));
  }

  getSelectedCountryName(selectedCountry: string): string {
    const country = this.countries.find(item => item.value == selectedCountry);
    
    return country.viewValue;
  }
}
