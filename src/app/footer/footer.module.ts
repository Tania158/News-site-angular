import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../shared/material/material.module';
import { NgxScrollTopModule } from "ngx-scrolltop";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NgxScrollTopModule
  ],
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule {}