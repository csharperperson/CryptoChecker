import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

import { Currency } from './currency';

@Injectable()
export class CurrencyService {
    baseUrl = 'https://api.coinmarketcap.com/v1';
    private currencySubject = new Subject<any>();

    constructor(private http: HttpClient) { }

    getCurrencies(): Observable<Currency[]> {
        return this.http
            .get(this.baseUrl + '/ticker/?limit=12')
            .map(response => response as Currency[]);
    }

    sendCurrencies(currencies: Currency[]) {
        this.currencySubject.next({ currencies })
    }

    receiveCurrencies(): Observable<any> {
        return this.currencySubject.asObservable();
    }
}
