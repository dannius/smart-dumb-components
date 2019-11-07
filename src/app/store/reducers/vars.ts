import * as varsActions from '../actions/vars';

export interface IVarState {
  alpha: number;
  beta: number;
}

export const initialState: IVarState = {
  alpha: -5,
  beta: 10,
};

export function reducer(state = initialState, action: varsActions.Action) {
  switch (action.type) {
    case varsActions.INCREMENT:
      return {
        alpha: action.payload === 'alpha' ? state.alpha + 1 : state.alpha,
        beta: action.payload === 'beta' ? state.beta + 1 : state.beta,
      };
    case varsActions.DECREMENT:
      return {
        alpha: action.payload === 'alpha' ? state.alpha - 1 : state.alpha,
        beta: action.payload === 'beta' ? state.beta - 1 : state.beta,
      };
    case varsActions.CHANGE:
      return { ...state };
    default:
      return state;
  }
}

export const getAlphaState = (state: IVarState) => state.alpha;
export const getBetaState = (state: IVarState) => state.beta;
