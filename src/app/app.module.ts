import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { SmartContainer } from './containers';
import { DumbComponent } from './components';
import { reducer } from './store/reducers/vars';

const CONTAINERS = [
  SmartContainer,
];

const COMPONENTS = [
  DumbComponent,
];


@NgModule({
  declarations: [
    AppComponent,

    CONTAINERS,
    COMPONENTS,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ vars: reducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
