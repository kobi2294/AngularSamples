import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { TodosReducer } from './todos-state.reducer';

export const appReducers: ActionReducerMap<AppState> = {
    todosData: TodosReducer
}

