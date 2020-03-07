import { Component } from '@angular/core';
import { ArchitectsApiService } from '../../../../core/services/architects-api.service';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent {

  public author;

  constructor(public _arcInfo: ArchitectsApiService) {
    this.author = this._arcInfo.currentArchitect;
  }
}
