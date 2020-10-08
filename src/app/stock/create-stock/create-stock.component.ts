import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/modal/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {

  public stock: Stock;

  constructor() {
    this.stock = new Stock("create stock", "CS", 80, 90);
  }

  ngOnInit(): void {
  }
}
