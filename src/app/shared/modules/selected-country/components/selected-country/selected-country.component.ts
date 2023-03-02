import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { getArticlesCountryAction } from '../../store/action/getArticlesCountry.action';

@Component({
  selector: 'app-selected-country',
  templateUrl: './selected-country.component.html',
  styleUrls: ['./selected-country.component.scss']
})
export class SelectedCountryComponent implements OnInit {


  q: string = '';
  country: string = 'us';
  sources: string = '';
  category: string = '';
  pageSize: number = 30;
  page: number = 1;

  constructor(private store: Store<AppStateInterface>) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.store.dispatch(getArticlesCountryAction(
      {
        q: this.q,
        country: this.country,
        sources: this.sources,
        category: this.category,
        pageSize: this.pageSize,
        page: this.page
      }
    ));
  }
}
