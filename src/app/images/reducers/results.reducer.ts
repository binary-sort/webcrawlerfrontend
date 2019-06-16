import { Result } from '../models/result';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { FormActions } from '../actions';
import { createFeatureSelector } from '@ngrx/store';

export interface State extends EntityState<Result> { }

export const adapter: EntityAdapter<Result> = createEntityAdapter<Result>({
  selectId: (result: Result) => result.url
});

export const initialState: State = adapter.getInitialState({});

export function reducer(state: State = initialState, action: FormActions.LoadImagesSuccess) {
  switch (action.type) {
    case FormActions.FormActionTypes.LoadImagesSuccess:
      return adapter.addMany(action.payload, state);
    default:
      return state;
  }
}

export const getResultState = createFeatureSelector<State>('results');
