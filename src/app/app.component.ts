import { Component, OnInit } from '@angular/core';
import { Stock } from './modal/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public stockObj: Stock;
  title = 'stock-market';

  ngOnInit(): void {
    this.stockObj = new Stock('Test Stock Company', 'TSC', 85, 80);
  }

  onToggleFavorite($event): void{
    console.log("onToggleFavorite($event)");
  }
}
