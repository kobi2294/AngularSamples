import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { CounterStore } from './store/counter.store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'], 
  providers: [
    CounterStore
  ]
})
export class CounterComponent implements OnInit {

  constructor(public store: CounterStore) { }

  valueInput$ = new Subject<number>();
  textInput$ = new Subject<string>();

  sub = new Subscription();

  ngOnInit(): void {
    this.store.setValue(this.valueInput$);
    this.sub.add(this.store.longSetEffect(this.textInput$));
  }

  setStateValue() {
    this.store.setState({value: 12, isActive: true});    
  }

  setStateUpdater() {
    this.store.setState(state => ({
      ...state, 
      isActive: !state.isActive, 
      value: state.value + 1
    }));
  }

  callUpdater() {
    this.store.setValue(42);
    this.store.setAllValues({value: 42});
  }

  callEffect() {
    const sub1 = this.store.longSetEffect('hello');
    console.log(sub1);
  }

  unsubscribeEffect() {
    this.sub.unsubscribe();
  }

}
