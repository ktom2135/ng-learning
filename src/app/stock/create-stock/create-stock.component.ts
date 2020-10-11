import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/modal/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {

  public stock: Stock;
  public confirmed = false;

  public exchanges = ['NYSE', 'NADSAQ', 'OTHER'];

  constructor() {
    this.stock = new Stock("create stock", "CS", 80, 90, "OTHER");
  }

  ngOnInit(): void {

  }

  setStockPrice(price: number): void {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(stockForm): void {
    console.log("Creating stock, ", JSON.stringify(stockForm.value));
  }

  codeChange(stockCodeTemplate): void {
    // console.log(stockCodeTemplate);
  }
}
