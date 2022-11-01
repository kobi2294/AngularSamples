import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { CounterState, initialCounterState } from "./counter.state";

@Injectable()
export class CounterStore extends ComponentStore<CounterState> {
    constructor() {
        super(initialCounterState);
    }
}