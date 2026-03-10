import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotOrders } from './bot-orders';

describe('BotOrders', () => {
  let component: BotOrders;
  let fixture: ComponentFixture<BotOrders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotOrders],
    }).compileComponents();

    fixture = TestBed.createComponent(BotOrders);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
