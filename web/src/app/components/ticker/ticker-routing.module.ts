import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TickerComponent } from './ticker.component';

const routes: Routes = [{ path: '', component: TickerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TickerRoutingModule { }
