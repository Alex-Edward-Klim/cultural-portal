import { Component, OnInit, Input } from '@angular/core';
import { ArchitectInfoService } from 'src/app/architects/services/architect-info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  public author;

  constructor(public _arcInfo: ArchitectInfoService) {
    this.author = _arcInfo.currentArchitect;
  }

  ngOnInit(): void {
  }

}
