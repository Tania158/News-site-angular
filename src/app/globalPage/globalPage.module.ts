import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { GlobalPageComponent } from './components/global-page/global-page.component';
import { RouterModule } from "@angular/router";
import { MaterialModule } from '../shared/material/material.module';
import { SelectedCountryModule } from "../shared/modules/selected-country/selected-country.module";
import { BackendErrorMessagesModule } from "../shared/modules/backendErrorMessages/backendErrorMessages.module";
import { LoadingModule } from "../shared/modules/loading/loading.module";
import { SelectedCountryService } from "../shared/services/selectedCountry.service";

const routes = [
  {
    path: '',
    component: GlobalPageComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    SelectedCountryModule,
    BackendErrorMessagesModule,
    LoadingModule,
  ],
  declarations: [
    GlobalPageComponent
  ],
  providers: [SelectedCountryService]
})
export class GlobalPageModule {}