import {Component, OnInit} from '@angular/core';
import { ArchitectsApiService } from 'src/app/core/services/architects-api.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-architect-detailed',
  templateUrl: './architect-detailed.component.html',
  styleUrls: ['./architect-detailed.component.scss']
})
export class ArchitectDetailedComponent implements OnInit {

  public author;

  constructor(private arcInfo: ArchitectsApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      window.scrollTo(0, 0);
      this.author = this.arcInfo.getById(params.id);
    });
  }
}
