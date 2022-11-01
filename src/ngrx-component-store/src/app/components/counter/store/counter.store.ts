import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { tap } from "rxjs/operators";
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

    readonly longSetEffect = this.effect<string>(origin$ => origin$.pipe(
        tap(val => console.log(val))
    ));
}