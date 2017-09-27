import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurrencyComponent } from './currency/currency.component';

import { AppRoutingModule } from './app-routing.module';

import { CurrencyService } from './currency/currency.service';
import { CurrencyDetailComponent } from './currency-detail/currency-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    CurrencyDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
