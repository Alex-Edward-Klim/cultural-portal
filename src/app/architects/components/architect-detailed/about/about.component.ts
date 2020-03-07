import { Component, OnInit } from '@angular/core';
import { ArchitectsApiService } from '../../../../core/services/architects-api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  public author;

  constructor(public _arcInfo: ArchitectsApiService) {
    this.author = _arcInfo.currentArchitect;
  }

  ngOnInit(): void {
  }

}
