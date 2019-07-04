import { CounterService } from './../../services/counter.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-modifier',
  templateUrl: './counter-modifier.component.html',
  styleUrls: ['./counter-modifier.component.css']
})
export class CounterModifierComponent  {
  constructor(private counterService: CounterService) { }
  async increase() {
    await this.counterService.increment();
  }
  async decrease() {
    await this.counterService.decrement();
  }
}

