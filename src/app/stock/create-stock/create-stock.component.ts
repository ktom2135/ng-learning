import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  public stockForm: FormGroup;

  constructor() {
    this.stock = new Stock("create stock", "CS", 80, 90, "OTHER");
  }

  ngOnInit(): void {
    this.stockForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      code: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      price: new FormControl(0, [Validators.required, Validators.min(0)])
    });

  }

  onSubmit(): void {
    console.log('Stock Form:', this.stockForm);
    console.log( this.stockForm.get("code").errors);
    console.log('Stock Form Value:', this.stockForm.value);
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
