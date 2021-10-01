import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {Contributor, Languages, RepositoriesSearchRequest, Repository} from './repositories.model';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  // Лучше хранить в отдельном файле. Например, в utils.ts
  static objectToHttpParams(o: object): HttpParams {
    let params = new HttpParams();
    for (const [key, value] of Object.entries(o)) {
      if (value != null && value !== '') {
        params = params.append(key, typeof value === 'string' ? value.trim() : value);
      }
    }
    return params;
  }

  constructor(private http: HttpClient) {
  }

  getRepositories(name: string, page: number): Observable<RepositoriesSearchRequest> {
    const params = RepositoriesService.objectToHttpParams({
      q: `${name}+in:name`,
      sort: 'stars',
      per_page: 10,
      page
    });
    return this.http.get<RepositoriesSearchRequest>('https://api.github.com/search/repositories', {params}).pipe(
      catchError(e => {
        alert(e.error.message);
        console.error(e);
        return throwError(e);
      }));
  }

  getRepository(id: string): Observable<Repository> {
    return this.http.get<Repository>(`https://api.github.com/repositories/${id}`).pipe(
      catchError(e => {
        alert(e.error.message);
        console.error(e);
        return throwError(e);
      }));
  }

  getContributors(fullName: string): Observable<Contributor[]> {
    return this.http.get<Contributor[]>(`https://api.github.com/repos/${fullName}/contributors`).pipe(
      catchError(e => {
        alert(e.error.message);
        console.error(e);
        return throwError(e);
      }));
  }

  getLanguages(fullName: string): Observable<Languages> {
    return this.http.get<Languages>(`https://api.github.com/repos/${fullName}/languages`).pipe(
      catchError(e => {
        alert(e.error.message);
        console.error(e);
        return throwError(e);
      }));
  }

}
