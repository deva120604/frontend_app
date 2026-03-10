import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bot-config',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bot-config.html',
  styleUrls: ['./bot-config.css']
})
export class BotConfigComponent {

pair="BTC/USDT";
spread=0.5;
orderSize=0.1;

save(){
alert("Configuration Saved");
}

}