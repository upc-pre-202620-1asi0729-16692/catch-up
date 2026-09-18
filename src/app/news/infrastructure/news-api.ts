import {inject, Service} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {SourceAssembler} from './source-assembler';
import {map, Observable} from 'rxjs';
import {Source} from '../domain/model/source.entity';
import {SourcesResponse} from './sources-response';
import {Article} from '../domain/model/article.entity';
import {TopHeadlinesResponse} from './top-headlines-response';
import {ArticleAssembler} from './article-assembler';

@Service()
export class NewsApi {
  private baseUrl = environment.newsProviderApiBaseUrl;
  private sourcesEndpoint = environment.newsProviderSourcesEndpointPath;
  private newsEndpoint = environment.newsProviderNewsEndpointPath;
  private apiKey = environment.newsProviderApiKey;
  private http = inject(HttpClient);
  private articleAssembler = inject(ArticleAssembler);
  private sourceAssembler = inject(SourceAssembler);

  getSources(): Observable<Source[]> {
    return this.http.get<SourcesResponse>(`${this.baseUrl}${this.sourcesEndpoint}`, {
      params: { apiKey: this.apiKey}
    }).pipe(map(response => this.sourceAssembler.toEntitiesFromResponse(response)));
  }

  getArticlesBySourceId(sourceId: string): Observable<Article[]> {
    return this.http.get<TopHeadlinesResponse>(`${this.baseUrl}${this.newsEndpoint}`, {
      params: { apiKey: this.apiKey, sources: sourceId }
    }).pipe(map(response => this.articleAssembler.toEntitiesFromResponse(response)));
  }
}
