import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { AppModule } from '../app.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  currencies: string[] = ['USD', 'EUR', 'UAH'];
  firstConvertedCurrency: string = 'USD';
  secondConvertedCurrency: string = 'UAH';
  firstCurrencyAmount: number = 1;
  secondCurrencyAmount: number = 0;
  rates: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getExchangeRates();
  }

  getExchangeRates(): void {
    const url = `https://api.exchangerate-api.com/v4/latest/${this.firstConvertedCurrency}`;
    
    this.http.get(url).subscribe((data: any) => {
      this.rates = data.rates;
      this.convertFirstCurrency();
    });
  }

  convertFirstCurrency(): void {
    if (this.rates) {
      this.secondCurrencyAmount = this.firstCurrencyAmount * (this.rates[this.secondConvertedCurrency] || 1);
    }
  }

  convertSecondCurrency(): void {
    if (this.rates) {
      this.firstCurrencyAmount = this.secondCurrencyAmount / (this.rates[this.secondConvertedCurrency] || 1);
    }
  }

  onFirstCurrencyChange(): void {
    this.getExchangeRates();
  }

  onSecondCurrencyChange(): void {
    this.convertFirstCurrency();
  }
}