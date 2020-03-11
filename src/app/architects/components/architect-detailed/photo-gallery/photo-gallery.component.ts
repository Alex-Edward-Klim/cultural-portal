import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {

  @Input() author;
  images: any;
  conf: any;

  constructor() { }

  ngOnInit(): void {
    this.images = this.author.images;
    this.conf = {
      imageOffset: '0px',
      showDeleteControl: false,
      showImageTitle: false,
    };
  }

}
