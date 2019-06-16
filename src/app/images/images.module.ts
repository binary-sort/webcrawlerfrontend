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
import { EffectsModule } from '@ngrx/effects';
import { FormEffects } from './effects/form.effects';
import { ResultCardComponent } from './components/result-card/result-card.component';

@NgModule({
  declarations: [ImageListComponent, FormComponent, ResultCardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('results', reducer),
    EffectsModule.forFeature([FormEffects]),
    ImagesRoutingModule
  ],
  providers: [CrawlerService]
})
export class ImagesModule { }
