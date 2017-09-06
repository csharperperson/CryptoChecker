import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CurrencyService } from '../currency/currency.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})

export class ChartsComponent implements OnDestroy {
  currencies: any[];
  subscription: Subscription;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Currency';
  showYAxisLabel = true;
  yAxisLabel = 'Price';

  constructor(private currencyService: CurrencyService) {
    this.subscription = this.currencyService.receiveCurrencies().subscribe(currencies => { this.currencies = currencies; });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
