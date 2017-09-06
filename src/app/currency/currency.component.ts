import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrencyService } from './currency.service';
import { Currency } from './currency';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})

export class CurrencyComponent implements OnInit, OnDestroy {
  currencies: Currency[];
  timer: Observable<number>;
  alive: boolean;

  constructor(private currencyService: CurrencyService) {
    this.timer = Observable.timer(0, 10000);
    this.alive = true;
  }

  sendCurrencies(): void {
    this.currencyService.sendCurrencies(this.currencies);
  }

  ngOnInit() {
    this.timer
      .takeWhile(() => this.alive)
      .subscribe(() => {
        this.currencyService.getCurrencies().subscribe(currencies => {
          this.currencies = currencies;
          this.sendCurrencies();
        });
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
