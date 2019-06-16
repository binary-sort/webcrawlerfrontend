import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-preview-list',
  templateUrl: './image-preview-list.component.html',
  styleUrls: ['./image-preview-list.component.scss']
})
export class ImagePreviewListComponent implements OnInit {

  @Input() images: string[];

  constructor() { }

  ngOnInit() {
  }

}
