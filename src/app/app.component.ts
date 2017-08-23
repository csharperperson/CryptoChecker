import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CryptoChecker';

  constructor(private http: HttpClient) {}

  currencies: any;
  baseUrl = 'https://api.coinmarketcap.com/v1';

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get(this.baseUrl + '/ticker/?limit=10').subscribe(data => {
      // Read the result field from the JSON response.
      this.currencies = data;
    });
  }
}
