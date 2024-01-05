import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { SelectedCountryService } from 'src/app/shared/services/selectedCountry.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  isShowDivIf = false;

  constructor(private selectedCountryService: SelectedCountryService) { }

  get selectedCountryName(): string {
    if (this.selectedCountryService.get('countryName')) {
      return this.selectedCountryService.get('countryName');;
    } else {
      return 'Country'
    }
  }

  get selectedCountryCode(): string {
    if (this.selectedCountryService.get('countryCode')) {
      return this.selectedCountryService.get('countryCode');
    } else {
      return 'country'
    }
  }

  ngOnInit(): void {
  }
  
  toggleDisplayDivIf(): void {
    this.isShowDivIf = !this.isShowDivIf;
  }
}
