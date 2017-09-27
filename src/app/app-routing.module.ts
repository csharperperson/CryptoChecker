import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CurrencyComponent } from './currency/currency.component';
import { CurrencyDetailComponent } from './currency-detail/currency-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/currency', pathMatch: 'full' },
  { path: 'currency',  component: CurrencyComponent },
  { path: 'currency/detail/:id', component: CurrencyDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
