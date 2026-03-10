import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotLogs } from './bot-logs';

describe('BotLogs', () => {
  let component: BotLogs;
  let fixture: ComponentFixture<BotLogs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotLogs],
    }).compileComponents();

    fixture = TestBed.createComponent(BotLogs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
