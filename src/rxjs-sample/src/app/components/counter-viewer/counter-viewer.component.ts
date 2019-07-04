import { CounterService } from './../../services/counter.service';
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-viewer',
  templateUrl: './counter-viewer.component.html',
  styleUrls: ['./counter-viewer.component.css'], 
})
export class CounterViewerComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.counter$ = this.counterService.getCounter();
  }
}




