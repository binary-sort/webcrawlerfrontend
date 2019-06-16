import { Result } from '../models/result';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { FormActions } from '../actions';
import { createFeatureSelector } from '@ngrx/store';

export interface State extends EntityState<Result> { }

export const adapter: EntityAdapter<Result> = createEntityAdapter<Result>({});

export const initialState: State = adapter.getInitialState({});

export function reducer(state: State = initialState, action: any) {
  switch (action.type) {
    case FormActions.loadImagesSuccess.type:
      return adapter.addMany(action.data, state);
    default:
      return state;
  }
}

export const getResultState = createFeatureSelector<State>('results');
