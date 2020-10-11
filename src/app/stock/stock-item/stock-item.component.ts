import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked
} from '@angular/core';
import { Stock } from './../../modal/stock'

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class StockItemComponent implements OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked {

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
    // console.log("========================  ngOnInit :: StockItemComponent ========================");
  }

  ngAfterContentChecked(): void{
    // console.log("========================  ngAfterContentChecked :: StockItemComponent========================");
  }

  ngAfterContentInit(): void{
    // console.log("========================  ngAfterContentInit :: StockItemComponent========================");

  }

  ngAfterViewChecked(): void{
    // console.log("========================  ngAfterViewChecked :: StockItemComponent========================");

  }

  ngDoCheck():void{
    // console.log("========================  ngDoCheck :: StockItemComponent========================");

  }

  ngOnChanges():void{
    // console.log("========================  ngOnChanges :: StockItemComponent========================");
  }

  ngOnDestroy():void{
    // console.log("========================  ngOnDestroy :: StockItemComponent========================");
  }

  trackStockByCode(index) {
    return this.stock.code;
  }

  destroyStockPrice(){
    this.stock.destroy = true;
  }

  changeStockPrice(): void {
    this.stock.price += 5;
  }

  onToggleFavoriteEventOnStockItem(event) {
    this.stock.toggleFavorite(event);
    this.toggleFavoriteOutputOnStockItem.emit(this.stock);
  }
}
