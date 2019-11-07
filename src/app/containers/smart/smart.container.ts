import { Component, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { untilDestroyed } from '@orchestrator/ngx-until-destroyed';

import * as fromRoot from './../../store/reducers/index';
import * as actions from './../../store/actions/vars';
import { Observable, interval, pipe, Subscription } from 'rxjs';


@Component({
  selector: 'app-smart',
  templateUrl: './smart.container.html',
  styleUrls: ['./smart.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartContainer implements OnDestroy {
  public alpha$: Observable<number>;
  public beta$: Observable<number>;

  public subscription: Subscription;

  public ngOnDestroy() {}

  constructor(
    private readonly store: Store<fromRoot.IState>,
    private readonly cdr: ChangeDetectorRef,
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
    this.subscription = interval(1000)
    .pipe(untilDestroyed(this))
    .subscribe(() => {
      this.cdr.detach();
      this.increment('alpha');
      this.decrement('beta');
      this.decrement('beta');
      this.cdr.detectChanges();
    });
  }

  public stopChanges() {
    if (!this.subscription) {
      return;
    }

    this.subscription.unsubscribe();
    this.subscription = null;
  }

}
