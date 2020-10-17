import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder) {
    this.stock = new Stock("create stock", "CS", 80, 90, "OTHER");
  }

  ngOnInit(): void {
    this.stockForm = this.fb.group ({
      name: new FormControl(this.stock.name, Validators.required),
      code: new FormControl(this.stock.code, [Validators.required, Validators.minLength(2)]),
      price: new FormControl(this.stock.price, [Validators.required, Validators.min(0)]),
      previousPrice: [this.stock.previousPrice, [Validators.required, Validators.maxLength(6)]],
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

  createStock(stockForm: NgForm): void {
    console.log("Creating stock, ", JSON.stringify(stockForm.value));
  }

  codeChange(stockCodeTemplate): void {
    // console.log(stockCodeTemplate);
  }
}
