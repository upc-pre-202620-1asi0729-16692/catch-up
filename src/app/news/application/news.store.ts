import {computed, inject, Service, signal} from '@angular/core';
import {Source} from '../domain/model/source.entity';
import {NewsApi} from '../infrastructure/news-api';
import {LogoDevApi} from '../../shared/infrastructure/logo-dev-api';
import {Url} from '../../shared/domain/model/url';
import {Article} from '../domain/model/article.entity';

@Service()
export class NewsStore {
  private sourcesSignal = signal<Source[]>([]);
  private articlesSignal = signal<Record<string, Article[]>>({});
  private newsApi = inject(NewsApi);
  private logoApi = inject(LogoDevApi);

  readonly sources = computed(() => this.sourcesSignal());

  private _currentSource!: Source;

  get currentSource() {
    return this._currentSource;
  }

  set currentSource(source: Source) {
    this._currentSource = source;
    this.loadArticlesForCurrentSource();
  }

  loadSources() {
    if (this.sourcesSignal().length === 0 ) {
      this.newsApi.getSources().subscribe((sources) => {
        sources.forEach(source => source.urlToLogo = new Url(this.logoApi.getUrlToLogo(source.urlAsString)));
        this.sourcesSignal.set(sources);
        this.currentSource = sources[0];
        this.loadArticlesForCurrentSource();
      });
    }
  }

  loadArticlesForCurrentSource() {
    console.log(this.currentSource);
    const current = this.articlesSignal() ?? {};
    const source = this._currentSource;
    if (!current[source.id]) {
      this.newsApi.getArticlesBySourceId(source.id).subscribe(articles => {
        articles.forEach(article => {
          article.updateSourceInformation(source);
        });
        this.articlesSignal.set({...current, [source.id]: articles});
      });
    }
  }
}
