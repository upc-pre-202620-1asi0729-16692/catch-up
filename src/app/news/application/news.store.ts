import {computed, inject, Service, signal} from '@angular/core';
import {Source} from '../domain/model/source.entity';
import {NewsApi} from '../infrastructure/news-api';
import {LogoDevApi} from '../../shared/infrastructure/logo-dev-api';
import {Url} from '../../shared/domain/model/url';

@Service()
export class NewsStore {
  private sourcesSignal = signal<Source[]>([]);
  private newsApi = inject(NewsApi);
  private logoApi = inject(LogoDevApi);

  readonly sources = computed(() => this.sourcesSignal());

  private _currentSource!: Source;

  get currentSource() {
    return this._currentSource;
  }

  set currentSource(source: Source) {
    this._currentSource = source;
  }

  loadSources() {
    if (this.sourcesSignal().length === 0 ) {
      this.newsApi.getSources().subscribe((sources) => {
        sources.forEach(source => source.urlToLogo = new Url(this.logoApi.getUrlToLogo(source.urlAsString)));
        this.sourcesSignal.set(sources);
        this.currentSource = sources[0];
      });
    }
  }
}
