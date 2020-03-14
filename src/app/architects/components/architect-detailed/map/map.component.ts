import {Component, Input, OnInit} from '@angular/core';
import {Architect} from '../../../models/architect.interface';
import {environment} from '../../../../../environments/environment.prod';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() author: Architect;

  public src: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(`${environment.mapsUrl}${this.author.geovidgetLink}`);
  }

}
