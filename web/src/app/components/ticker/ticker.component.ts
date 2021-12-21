import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TickerStore } from './ticker.store';
import { Ticker } from 'src/shared/model/ticker.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss'],
  providers: [TickerStore]
})

export class TickerComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ['primary_exchange', 'ticker', 'name', 'market', 'currency_name', 'cik', 'composite_figi', 'share_class_figi','type', 'active'];
  tickers$!: Observable<Ticker[]>;

  constructor(
    public store: TickerStore
  ) {
   }

  ngOnInit(): void {    
    // this.store.getTickers({ 'active': true, 'sort': 'ticker','order': 'asc', 'limit': 10})
    // this.tickers$ = this.store.tickers$;
    // console.log('After Get tickers')
    // console.log(this.tickers$)
    // console.log(this.store.tickers$)
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('on changes');
    // console.log(changes);
    // console.log(this.tickers$);
    // console.log(this.store.tickers$)
  }

  getTickers() {
    this.store.getTickers({ 'active': true, 'sort': 'ticker','order': 'asc', 'limit': 10})
    this.tickers$ = this.store.tickers$;
  }

  clearTickers() {
    this.store.setState({tickers: []})
  }
}
