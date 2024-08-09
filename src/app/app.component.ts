import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HeaderComponent, CurrencyConverterComponent, AppModule]
})
export class AppComponent {
  title = 'currency-exchange';
}