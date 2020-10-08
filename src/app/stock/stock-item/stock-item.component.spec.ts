import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Stock } from 'src/app/modal/stock';

import { StockItemComponent } from './stock-item.component';

describe('StockItemComponent', () => {
  let component: StockItemComponent;
  let fixture: ComponentFixture<StockItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemComponent);
    component = fixture.componentInstance;
    component.stock = new Stock("stock", "code", 1,1 ,"RMB");
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
