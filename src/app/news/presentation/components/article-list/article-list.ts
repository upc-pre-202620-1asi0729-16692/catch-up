import {Component, input} from '@angular/core';
import {Article} from '../../../domain/model/article.entity';
import {ArticleItem} from '../article-item/article-item';

@Component({
  imports: [
    ArticleItem
  ],
  selector: 'app-article-list',
  styleUrl: './article-list.css',
  templateUrl: './article-list.html',
})
export class ArticleList {
  articles = input.required<Array<Article>>();
}
