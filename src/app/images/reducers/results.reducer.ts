import { Result } from '../models/result';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { FormActions } from '../actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends EntityState<Result> {
  loading: boolean;
}

export const adapter: EntityAdapter<Result> = createEntityAdapter<Result>({
  selectId: (result: Result) => result.url
});

export const initialState: State = adapter.getInitialState({
  loading: false
});

export function reducer(state: State = initialState, action: (
  FormActions.LoadImagesSuccess | FormActions.LoadImages
)) {
  switch (action.type) {
    case FormActions.FormActionTypes.LoadImages:
      return adapter.removeAll({ ...state, loading: true });
    case FormActions.FormActionTypes.LoadImagesSuccess:
      return adapter.addMany(action.payload, { ...state, loading: false });
    default:
      return state;
  }
}

export const getResultState = createFeatureSelector<State>('results');

export const {
  selectIds: getResultIds,
  selectEntities: getResultEntities,
  selectAll: getAllResults,
  selectTotal: getTotalResults,
} = adapter.getSelectors(getResultState);

export const getLoaderStatus = createSelector(
  getResultState,
  (state: State) => state.loading
);
