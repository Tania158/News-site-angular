import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from "@angular/router";
import { MaterialModule } from '../shared/material/material.module';
import { GlobalPageModule } from "../globalPage/globalPage.module";
import { SelectedCountryService } from "../shared/services/selectedCountry.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    GlobalPageModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [HeaderComponent],
  providers: [SelectedCountryService]
})
export class HeaderModule {}