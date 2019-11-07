import { Action } from '@ngrx/store';

export const INCREMENT = '[Vars] INCREMENT';
export const DECREMENT = '[Vars] DECREMENT';
export const CHANGE = '[Vars] Change';

export class Change implements Action {
    readonly type = CHANGE;
    constructor(public payload: any) { }
}

export class Increment implements Action {
    readonly type = INCREMENT;
    constructor(public payload: { alpha: number, beta: number }) { }
}

export class Decrement implements Action {
    readonly type = DECREMENT;
    constructor(public payload: { alpha: number, beta: number }) { }
}

export type Action = Increment | Decrement | Change;