import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotDashboard } from './bot-dashboard';

describe('BotDashboard', () => {
  let component: BotDashboard;
  let fixture: ComponentFixture<BotDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(BotDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
