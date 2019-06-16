import { Injectable } from '@angular/core';
import { CrawlerService } from '../crawler.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { FormActions } from '../actions';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class FormEffects {

  constructor(private action$: Actions, private crawlerService: CrawlerService) { }

  @Effect()
  postData$ = (): Observable<Action> =>
    this.action$.pipe(
      ofType<FormActions.LoadImages>(FormActions.FormActionTypes.LoadImages),
      map(action => action.payload),
      switchMap(data => {
        return this.crawlerService.parseURL(data).pipe(
          map(results => new FormActions.LoadImagesSuccess(results))
        );
      })
    )
}
