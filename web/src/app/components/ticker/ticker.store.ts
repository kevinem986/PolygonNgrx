import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Injectable } from '@angular/core';
import { Ticker } from 'src/shared/model/ticker.model';
import { Observable, switchMap, tap } from 'rxjs';
import { PolygonService } from '../../../shared/service/polygon.service';
import { HttpErrorResponse } from '@angular/common/http';

interface TickerState {
  tickers: Ticker[];
}

@Injectable()
export class TickerStore extends ComponentStore<TickerState> {

  readonly tickers$: Observable<Ticker[]> = this.select(state => state.tickers);

  getTickers = this.effect(
    (
      action$: Observable<{
        active: boolean;
        sort: string;
        order: string;
        limit: number;
      }>
    ) =>
      action$.pipe(
        tap(() => console.log('Before get the tickers in Polygon API.')),
        switchMap(({ active, sort, order, limit }) =>
          this.polygonService.getTicker(active, sort, order, limit).pipe(
            tap(() => console.log('While get the tickers in Polygon API.')),
            tap((response) => console.log(response.results)),
            tapResponse(
              (response) =>
                this.patchState({
                  tickers: response.results,
                }),
              (error: HttpErrorResponse) => console.log(error)
            )
          )
        )
      )
  );

  constructor(private polygonService: PolygonService) {
    super({ tickers: [] });
  }
}
