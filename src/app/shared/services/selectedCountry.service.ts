import { Injectable } from "@angular/core";

@Injectable()
export class SelectedCountryService {

  selectedCountryName: string = 'United States of America';
  selectedCountryCode: string = 'us';
}