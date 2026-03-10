import { Routes } from '@angular/router';

export const routes: Routes = [

{
path: '',
redirectTo: 'market-bot',
pathMatch: 'full'
},

{
path: 'market-bot',
loadChildren: () =>
import('./market-bot/market-bot-module')
.then(m => m.MarketBotModule)
}

];