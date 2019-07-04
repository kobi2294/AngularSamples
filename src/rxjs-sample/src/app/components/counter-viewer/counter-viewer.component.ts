import { CounterService } from './../../services/counter.service';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'app-counter-viewer',
  templateUrl: './counter-viewer.component.html',
  styleUrls: ['./counter-viewer.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterViewerComponent implements OnInit, OnDestroy {
  counter: number;
  private sub: Subscription;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.sub = this.counterService.getCounter().subscribe(val => {
      this.counter = val;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}


