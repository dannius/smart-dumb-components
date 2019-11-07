import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dumb',
  templateUrl: './dumb.component.html',
  styleUrls: ['./dumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DumbComponent implements OnInit {
  @Input()
  public dumbValue: number;

  @Output()
  public increment = new EventEmitter<any>();

  @Output()
  public decrement = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
