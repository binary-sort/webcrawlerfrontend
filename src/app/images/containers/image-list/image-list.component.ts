import { Component, OnInit } from '@angular/core';
import * as fromState from './../../reducers/results.reducer';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Result } from '../../models/result';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  results$: Observable<Result[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromState.State>) {
    this.results$ = this.store.pipe(select(fromState.getAllResults));
    this.loading$ = this.store.pipe(select(fromState.getLoaderStatus));
  }

  ngOnInit() {
  }

}
