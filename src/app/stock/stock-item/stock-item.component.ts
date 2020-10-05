import { Component, OnInit } from '@angular/core';
import { Stock } from './../../modal/stock'

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  public stocks: Array<Stock>;
  constructor() { }

  ngOnInit(): void {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80),
      new Stock('Test Stock Company', 'TSC', 85, 80),
      new Stock('Test Stock Company', 'TSC', 85, 80)];
  }

  trackStockByCode(index, stock){
    return stock.code;

  }
}
