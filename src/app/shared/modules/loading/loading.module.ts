import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { LoadingComponent } from "./components/loading/loading.component";
import { MaterialModule } from '../../material/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [LoadingComponent],
  exports: [LoadingComponent]
})
export class LoadingModule {}