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
import { Stock } from './modal/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked {
  public stockObj: Stock;
  title = 'stock-market';

  ngOnInit(): void {
    this.stockObj = new Stock('Test Stock Company', 'TSC', 85, 80, "RMB");
    console.log("========================  ngOnInit :: AppComponent ========================");
  }

  onToggleFavoriteEventOnAppComponent($event): void {
    console.log("onToggleFavoriteEventOnAppComponent($event)");
  }

  changeStockObject(): void {
    this.stockObj = new Stock("Stock from AppComponent", "SFA", 80, 90, "RMB");

  }
  changeStockPrice(): void {
    this.stockObj.price += 10;
  }

  changeStockDestroyToShow(): void{
    this.stockObj.destroy = false;
  }

  testMethod():void{
    console.log("========================  testMethod from AppComponent ========================")
  }

  ngAfterContentChecked(): void {
    console.log("========================  ngAfterContentChecked :: AppComponent========================");
  }

  ngAfterContentInit(): void {
    console.log("========================  ngAfterContentInit :: AppComponent========================");

  }

  ngAfterViewChecked(): void {
    console.log("========================  ngAfterViewChecked :: AppComponent========================");

  }

  ngDoCheck(): void {
    console.log("========================  ngDoCheck :: AppComponent========================");

  }

  ngOnChanges(): void {
    console.log("========================  ngOnChanges :: AppComponent========================");

  }

  ngOnDestroy(): void {
    console.log("========================  ngOnChanges :: AppComponent========================");
  }

}
