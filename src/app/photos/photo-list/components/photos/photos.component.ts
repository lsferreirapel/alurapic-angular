import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Photo } from '../../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges{

  @Input() photos: Photo[] = []
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.photos) {
      this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(photos: Photo[]): any[] {
    let newRows = [];

    for(let i = 0; i < photos.length; i+=3) {
      newRows.push(photos.slice(i, i + 3));
    }

    return newRows;
  }
}
