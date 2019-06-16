import { createAction, props } from '@ngrx/store';
import { Result } from '../models/result';
import { PostData } from '../models/form';

export const loadImages = createAction(
  '[Crawler/API] load images',
  props<{ data: PostData }>()
);


export const loadImagesSuccess = createAction(
  '[Crawler/API] load images success',
  props<{ data: Result[] }>()
);
