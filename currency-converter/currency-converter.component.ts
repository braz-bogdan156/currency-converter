import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss'],
})
export class CurrencyConverterComponent implements OnInit {
  exchangeRates: any;
  amount1: number = 1;
  amount2!: number;
  currency1: string = 'UAH';
  currency2: string = 'USD';

  currencies: string[] = ['UAH', 'USD', 'EUR']; 

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getExchangeRates().subscribe((data) => {
      this.exchangeRates = data.rates;
      this.convertCurrencies();
    });
  }

  convertCurrencies(): void {
    const rate1 = this.exchangeRates[this.currency1];
    const rate2 = this.exchangeRates[this.currency2];

    this.amount2 = (this.amount1 * rate1) / rate2;
  }
}