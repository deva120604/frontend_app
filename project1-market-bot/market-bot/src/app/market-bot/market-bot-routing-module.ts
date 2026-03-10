import { Routes } from '@angular/router';

import { BotDashboardComponent } from './bot-dashboard/bot-dashboard';
import { BotConfigComponent } from './bot-config/bot-config';
import { BotOrdersComponent } from './bot-orders/bot-orders';
import { BotProfitComponent } from './bot-profit/bot-profit';
import { BotLogsComponent } from './bot-logs/bot-logs';

export const marketBotRoutes: Routes = [

{ path: '', component: BotDashboardComponent },

{ path: 'config', component: BotConfigComponent },

{ path: 'orders', component: BotOrdersComponent },

{ path: 'profit', component: BotProfitComponent },

{ path: 'logs', component: BotLogsComponent }

];