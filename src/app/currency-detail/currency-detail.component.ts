import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Currency } from '../currency/currency';
import { CurrencyService } from '../currency/currency.service';

@Component({
  selector: 'app-currency-detail',
  templateUrl: './currency-detail.component.html',
  styleUrls: ['./currency-detail.component.css']
})
export class CurrencyDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private currencyService: CurrencyService
  ) {}

  @Input() currency: Currency;

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.currencyService.getCurrency(params.get('id')))
      .subscribe(currency => this.currency = currency);
  }

  goBack(): void {
    this.location.back();
  }
}
