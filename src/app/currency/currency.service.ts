import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Currency } from './currency';

@Injectable()
export class CurrencyService {
    baseUrl = 'https://api.coinmarketcap.com/v1';

    constructor(private http: HttpClient) { }

    getCurrencies(): Observable<Currency[]> {
        return this.http
            .get(this.baseUrl + '/ticker/?limit=12')
            .map(response => response as Currency[]);
    }

    getCurrency(id): Observable<Currency> {
        return this.http
            .get(this.baseUrl + '/ticker/' + id)
            .map(response => response[0] as Currency);
    }
}
