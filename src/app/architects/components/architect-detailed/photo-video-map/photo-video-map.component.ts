import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-video-map',
  templateUrl: './photo-video-map.component.html',
  styleUrls: ['./photo-video-map.component.scss']
})
export class PhotoVideoMapComponent implements OnInit {

  @Input() author;

  constructor() { }

  ngOnInit(): void { }
}
