import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from "@angular/router";
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {}