import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo-layout',
  imports: [MatTabsModule],
  templateUrl: './demo-layout.html',
  styleUrl: './demo-layout.scss',
})
export class DemoLayout {
  readonly route = inject(ActivatedRoute);
  readonly rawTitle = toSignal(this.route.title, { initialValue: ''});
  readonly title = computed(() => this.rawTitle() || '');


  constructor() {
    effect(() => {
      console.log('Navigation title:', this.title());
    })
  }

}
