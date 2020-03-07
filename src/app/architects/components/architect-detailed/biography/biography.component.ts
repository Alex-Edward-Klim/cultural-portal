import { Component, OnInit } from '@angular/core';
import { ArchitectInfoService } from 'src/app/architects/services/architect-info.service';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {

  public author;

  constructor(public _arcInfo: ArchitectInfoService) {
    this.author = _arcInfo.currentArchitect;
    console.log(this.author)
  }

  ngOnInit(): void {
  }

}
