import { Component, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { untilDestroyed } from '@orchestrator/ngx-until-destroyed';

import * as fromRoot from './../../store/reducers/index';
import * as actions from './../../store/actions/vars';
import { Observable, interval, pipe } from 'rxjs';


@Component({
  selector: 'app-smart',
  templateUrl: './smart.container.html',
  styleUrls: ['./smart.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartContainer implements OnDestroy {
  public alpha$: Observable<number>;
  public beta$: Observable<number>;

  public ngOnDestroy() {}

  constructor(
    private readonly store: Store<fromRoot.IState>,
    private _cdr: ChangeDetectorRef,
  ) {
    this.alpha$ = store.select(fromRoot.getAlpha);
    this.beta$ = store.select(fromRoot.getBeta);
  }

  public increment(type: string) {
    console.log(type);
    this.store.dispatch(new actions.Increment(type));
  }

  public decrement(type: string) {
    console.log(type);
    this.store.dispatch(new actions.Decrement(type));
  }

  public change() {
    interval(1000)
    .pipe(untilDestroyed(this))
    .subscribe(() => {
      this._cdr.detach();
      this.increment('alpha');
      this.decrement('beta');
      this.decrement('beta');
      this._cdr.detectChanges();
    });
  }

}
