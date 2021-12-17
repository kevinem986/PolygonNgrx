import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { TickerRoutingModule } from './ticker-routing.module';
import { TickerComponent } from './ticker.component';


@NgModule({
  declarations: [
    TickerComponent
  ],
  imports: [
    CommonModule,
    TickerRoutingModule,
    MatTableModule
  ]
})
export class TickerModule { }
