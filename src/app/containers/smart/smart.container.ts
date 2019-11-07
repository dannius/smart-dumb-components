import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './../../store/reducers/index';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-smart',
  templateUrl: './smart.container.html',
  styleUrls: ['./smart.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartContainer {
  public alpha$: Observable<number>;
  public beta$: Observable<number>;

  constructor(
    private readonly store: Store<fromRoot.IState>
  ) {
    this.alpha$ = store.select(fromRoot.getAlpha);
    this.beta$ = store.select(fromRoot.getBeta);
  }

}
