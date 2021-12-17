import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { TickerRoutingModule } from './ticker-routing.module';
import { TickerComponent } from './ticker.component';


@NgModule({
  declarations: [
    TickerComponent
  ],
  imports: [
    CommonModule,
    TickerRoutingModule,
    MatTableModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class TickerModule { }
