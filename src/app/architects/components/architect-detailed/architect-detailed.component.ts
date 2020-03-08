import { Component } from '@angular/core';
import { ArchitectsApiService } from 'src/app/core/services/architects-api.service';


@Component({
  selector: 'app-architect-detailed',
  templateUrl: './architect-detailed.component.html',
  styleUrls: ['./architect-detailed.component.scss']
})
export class ArchitectDetailedComponent {

  public author;

  constructor(public _arcInfo: ArchitectsApiService) {
    this.author = _arcInfo.currentArchitect;
  }
}
