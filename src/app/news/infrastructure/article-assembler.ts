import {inject, Service} from '@angular/core';
import {LogoDevApi} from '../../shared/infrastructure/logo-dev-api';
import {ArticleResource, TopHeadlinesResponse} from './top-headlines-response';
import {Article} from '../domain/model/article.entity';
import {Url} from '../../shared/domain/model/url';
import {DateTime} from '../../shared/domain/model/date-time';
import {Source} from '../domain/model/source.entity';

@Service()
export class ArticleAssembler {
  private logoApi = inject(LogoDevApi);

  toEntityFromResource(resource: ArticleResource) {
    let article = new Article();
    article.author = resource.author || '';
    article.source = new Source();
    article.source.id = resource.source.id || '';
    article.source.name = resource.source.name;
    article.source.url = new Url('');
    article.source.urlToLogo = new Url(this.logoApi.getUrlToLogo(resource.url));
    article.title = resource.title;
    article.description = resource.description || '';
    article.url = new Url(resource.url);
    article.urlToImage = new Url(resource.urlToImage || '');
    article.publishedAt = new DateTime(resource.publishedAt);
    return article;
  }

  toEntitiesFromResponse(response: TopHeadlinesResponse): Article[] {
    return response.articles.map(article => this.toEntityFromResource(article));
  }
}
