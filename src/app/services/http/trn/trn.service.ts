import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BaseHttpService } from '../base-http.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrnHttpService extends BaseHttpService {
  http = inject(HttpClient);

  getTransactionsList(
    page: number = 0,
    pageSize: number = 50,
    filter: { [key: string]: [string] } = {},
  ) {
    return of([]);

    const url = `${this.api}/transactions`;
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());
    const opts = {
      params,
    };

    return this.http.get(url, opts);
  }
}
