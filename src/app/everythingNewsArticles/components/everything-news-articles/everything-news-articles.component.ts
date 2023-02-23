import { Component, OnInit } from '@angular/core';
import { EverythingNewsArticleService } from '../../service/everythingNewsArticles.service';
import { Observable } from 'rxjs';
import { ArticlesResponseInterface } from '../../../shared/types/articlesResponse.Interface';

@Component({
  selector: 'app-everything-news-articles',
  templateUrl: './everything-news-articles.component.html',
  styleUrls: ['./everything-news-articles.component.scss']
})
export class EverythingNewsArticlesComponent implements OnInit {

  constructor(private everythingNewsArticleService: EverythingNewsArticleService) { }
  
  ngOnInit(): void {
    this.getEverythingArticles();
  }

  getEverythingArticles() {
    return this.everythingNewsArticleService.getEverythingArticles()
      .subscribe((res) => {
        console.log(res)
      });
  }

}
