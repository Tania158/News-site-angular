import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EverythingNewsArticlesComponent } from './components/everything-news-articles/everything-news-articles.component';
import { EverythingNewsArticleService } from './service/everythingNewsArticles.service';

const routes = [
  {
    path: 'everything',
    component: EverythingNewsArticlesComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [EverythingNewsArticlesComponent],
  exports: [EverythingNewsArticlesComponent],
  providers: [EverythingNewsArticleService]
})
export class EverythingNewsArticlesModule {}