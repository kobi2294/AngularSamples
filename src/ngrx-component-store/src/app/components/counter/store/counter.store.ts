import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { CounterState, initialCounterState } from "./counter.state";

@Injectable()
export class CounterStore extends ComponentStore<CounterState> {
    constructor() {
        super(initialCounterState);
    }

    value$ = this.select(state => state.value);
    isActive$ = this.select(state => state.isActive);

    readonly setValue = this.updater((state, val: number) => ({
        ...state, 
        value: val
    }));

    readonly setAllValues = this.updater((state, newState: Partial<CounterState>) => ({
        ...state, 
        ...newState
    }));
}