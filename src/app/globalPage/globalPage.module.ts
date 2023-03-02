import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { GlobalPageComponent } from './components/global-page/global-page.component';
import { RouterModule } from "@angular/router";
import { MaterialModule } from '../shared/material/material.module';

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
    RouterModule.forChild(routes)
  ],
  declarations: [
    GlobalPageComponent
  ]
})
export class GlobalPageModule {}