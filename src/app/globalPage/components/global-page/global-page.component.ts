import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getArticlesCountryAction } from 'src/app/shared/modules/selected-country/store/action/getArticlesCountry.action';
import { articlesCountrySelector, errorCountrySelector, isLoadingCountrySelector } from 'src/app/shared/modules/selected-country/store/selectors';
import { SelectedCountryService } from 'src/app/shared/services/selectedCountry.service';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { ArticlesResponseInterface } from 'src/app/shared/types/articlesResponse.Interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { CountriesCode } from '../../../shared/countriesCode/countriesCode';

@Component({
  selector: 'app-global-page',
  templateUrl: './global-page.component.html',
  styleUrls: ['./global-page.component.scss']
})
export class GlobalPageComponent implements OnInit {

  articles$!: Observable<ArticlesResponseInterface | null>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<BackendErrorsInterface | null>;

  pageSize = 5;
  page: number;

  selectedCountry: string;
  countries = CountriesCode;

  constructor(
    private store: Store<AppStateInterface>,
    private selectedCountryService: SelectedCountryService
    ) { }
  
  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  setSelectedCountry(): void {
    this.selectedCountryService.selectedCountryName = this.getSelectedCountryName(this.selectedCountry);
    this.selectedCountryService.selectedCountryCode = this.selectedCountry;
  }

  fetchData(): void {
    this.store.dispatch(getArticlesCountryAction(
      {
        q: '',
        country: this.selectedCountry,
        sources: '',
        category: '',
        pageSize: this.pageSize,
        page: null
      }
    ));
  }

  initializeValues(): void {
    this.selectedCountry = this.selectedCountryService.selectedCountryCode;

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
    this.setSelectedCountry();
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
