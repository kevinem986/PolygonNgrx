import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TickerRoutingModule } from './ticker-routing.module';
import { TickerComponent } from './ticker.component';


@NgModule({
  declarations: [
    TickerComponent
  ],
  imports: [
    CommonModule,
    TickerRoutingModule
  ]
})
export class TickerModule { }
