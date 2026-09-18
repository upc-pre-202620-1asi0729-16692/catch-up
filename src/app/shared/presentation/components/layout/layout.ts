import {Component, inject, OnInit} from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {LanguageSwitcher} from '../language-switcher/language-switcher';
import {Footer} from '../footer/footer';
import {NewsStore} from '../../../../news/application/news.store';
import {SourceList} from '../../../../news/presentation/components/source-list/source-list';
import {Source} from '../../../../news/domain/model/source.entity';
import {ArticleList} from '../../../../news/presentation/components/article-list/article-list';


@Component({
  imports: [
    MatSidenavContainer,
    MatSidenav,
    MatToolbar,
    MatSidenavContent,
    MatIconButton,
    MatIcon,
    LanguageSwitcher,
    Footer,
    SourceList,
    ArticleList
  ],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout implements OnInit {

  protected store = inject(NewsStore);
  protected readonly sources = this.store.sources;
  protected readonly articles = this.store.currenSourceArticles;

  ngOnInit(): void {
    this.store.loadSources();
    this.store.loadArticlesForCurrentSource();
  }

  updateArticlesBySource(source: Source) {
    this.store.currentSource = source;
    this.store.loadArticlesForCurrentSource();
  }

}
