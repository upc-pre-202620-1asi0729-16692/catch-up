import {inject, Service} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {SourceAssembler} from './source-assembler';
import {map, Observable} from 'rxjs';
import {Source} from '../domain/model/source.entity';
import {SourcesResponse} from './sources-response';

@Service()
export class NewsApi {
  private baseUrl = environment.newsProviderApiBaseUrl;
  private sourcesEndpoint = environment.newsProviderSourcesEndpointPath;
  private apiKey = environment.newsProviderApiKey;
  private http = inject(HttpClient);
  private sourceAssembler = inject(SourceAssembler);

  getSources(): Observable<Source[]> {
    return this.http.get<SourcesResponse>(`${this.baseUrl}${this.sourcesEndpoint}`, {
      params: { apiKey: this.apiKey}
    }).pipe(map(response => this.sourceAssembler.toEntitiesFromResponse(response)));
  }
}
