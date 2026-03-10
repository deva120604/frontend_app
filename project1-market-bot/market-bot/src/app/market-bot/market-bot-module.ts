import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { marketBotRoutes } from './market-bot-routing-module';

import { BotDashboardComponent } from './bot-dashboard/bot-dashboard';
import { BotConfigComponent } from './bot-config/bot-config';
import { BotOrdersComponent } from './bot-orders/bot-orders';
import { BotProfitComponent } from './bot-profit/bot-profit';
import { BotLogsComponent } from './bot-logs/bot-logs';

@NgModule({
imports:[
RouterModule.forChild(marketBotRoutes),

BotDashboardComponent,
BotConfigComponent,
BotOrdersComponent,
BotProfitComponent,
BotLogsComponent
]
})
export class MarketBotModule{}