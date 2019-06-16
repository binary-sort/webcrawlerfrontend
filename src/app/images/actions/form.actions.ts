
import { Result } from '../models/result';
import { PostData } from '../models/form';
import { Action } from '@ngrx/store';

export enum FormActionTypes {
  LoadImages = '[Crawler/API] load images',
  LoadImagesSuccess = '[Crawler/API] load images success'
}

export class LoadImages implements Action {
  readonly type = FormActionTypes.LoadImages;

  constructor(public payload: PostData) { }
}


export class LoadImagesSuccess implements Action {
  readonly type = FormActionTypes.LoadImagesSuccess;

  constructor(public payload: Result[]) { }
}
