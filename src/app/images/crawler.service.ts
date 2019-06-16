import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from './models/result';
import { PostData } from './models/form';
import { map } from 'rxjs/operators';

@Injectable()
export class CrawlerService {
  private BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  parseURL(data: PostData): Observable<Result[]> {
    return this.http.post<Result[]>(`${this.BASE_URL}/parse-url`, data).pipe(
      map(result => result)
    );
  }
}
