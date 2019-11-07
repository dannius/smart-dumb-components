import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  templateUrl: './dumb.component.html',
  styleUrls: ['./dumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DumbComponent implements OnInit {
  @Input()
  public dumbValue: number;

  constructor() { }

  ngOnInit() {
  }

}
