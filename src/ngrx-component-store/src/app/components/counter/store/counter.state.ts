export interface CounterState {
    readonly value: number;
    readonly isActive: boolean;
}

export const initialCounterState: CounterState = {
    value: 0, 
    isActive: true
}

