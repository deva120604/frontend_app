import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotProfit } from './bot-profit';

describe('BotProfit', () => {
  let component: BotProfit;
  let fixture: ComponentFixture<BotProfit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotProfit],
    }).compileComponents();

    fixture = TestBed.createComponent(BotProfit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
