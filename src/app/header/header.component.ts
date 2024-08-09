import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {
  targetCurrency: string = 'UAH';
  baseCurrencyDollar: string = 'USD';
  baseCurrencyEuro: string = 'EUR';

  currencyDataUSD: number = 0;
  currencyDataEUR: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getExchangeRates();
  }

  getExchangeRates(): void {
    const url = "https://api.exchangerate-api.com/v4/latest/";

    forkJoin({
      usdRate: this.http.get(url + this.baseCurrencyDollar),
      eurRate: this.http.get(url + this.baseCurrencyEuro)
    }).subscribe((data: any) => {
      this.currencyDataUSD = data.usdRate.rates[this.targetCurrency];
      this.currencyDataEUR = data.eurRate.rates[this.targetCurrency];
    });
  }
}
