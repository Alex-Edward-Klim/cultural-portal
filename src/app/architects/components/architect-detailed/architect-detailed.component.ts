import { Component, OnInit } from '@angular/core';
import { ArchitectInfoService } from '../../services/architect-info.service';

@Component({
  selector: 'app-architect-detailed',
  templateUrl: './architect-detailed.component.html',
  styleUrls: ['./architect-detailed.component.scss']
})
export class ArchitectDetailedComponent implements OnInit {

  public author;

  constructor(public _arcInfo: ArchitectInfoService) {
    this.author = _arcInfo.currentArchitect;
  }

  ngOnInit(): void {
  }

}
