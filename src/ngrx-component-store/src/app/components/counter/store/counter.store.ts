import { ComponentStore } from "@ngrx/component-store";
import { CounterState, initialCounterState } from "./counter.state";

export class CounterStore extends ComponentStore<CounterState> {
    constructor() {
        super(initialCounterState);
    }
}