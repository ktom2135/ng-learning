import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Stock } from './../../modal/stock'

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockItemComponent implements OnInit {

  @Input() public stock: Stock;
  @Output() private toggleFavoriteOutputOnStockItem: EventEmitter<Stock>;
  constructor() {
    this.toggleFavoriteOutputOnStockItem = new EventEmitter<Stock>();
  }

  ngOnInit(): void {
    // this.stocks = [
    //   new Stock('Test Stock Company', 'TSC', 85, 80),
    //   new Stock('Test Stock Company', 'TSC', 85, 80),
    //   new Stock('Test Stock Company', 'TSC', 85, 80)];
  }

  trackStockByCode(index, stock) {
    return stock.code;
  }

  changeStockPrice(stock : Stock): void {
    this.stock.price += 5;
  }

  onToggleFavoriteEventOnStockItem(event) {
    this.stock.toggleFavorite(event);
    this.toggleFavoriteOutputOnStockItem.emit(this.stock);
  }
}
