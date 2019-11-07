import { ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer } from '@ngrx/store';

import { IVarState, reducer, getAlphaState, getBetaState } from './vars';

export interface IState {
  vars: IVarState;
}

export const reducers: ActionReducerMap<IState> = {
  vars: reducer,
};

export function logger(red: ActionReducer<IState>): ActionReducer<IState> {
  return (state: IState, action: any): IState => {
    console.log('state', state);
    console.log('action', action);

    return red(state, action);
  };
}

export const metaReducers: MetaReducer<IState>[] = [logger];

export const getVars = createFeatureSelector<IVarState>('vars');

export const getAlpha = createSelector(getVars, getAlphaState);
export const getBeta = createSelector(getVars, getBetaState);
