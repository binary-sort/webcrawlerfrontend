import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import { MaterialModule } from '../material';
import { ImageListComponent } from './containers/image-list/image-list.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/results.reducer';
import { CrawlerService } from './crawler.service';

@NgModule({
  declarations: [ImageListComponent, FormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('results', reducer),
    ImagesRoutingModule
  ],
  providers: [CrawlerService]
})
export class ImagesModule { }
