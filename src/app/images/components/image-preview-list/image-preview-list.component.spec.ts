import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePreviewListComponent } from './image-preview-list.component';

describe('ImagePreviewListComponent', () => {
  let component: ImagePreviewListComponent;
  let fixture: ComponentFixture<ImagePreviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagePreviewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePreviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
