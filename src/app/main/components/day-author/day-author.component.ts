import { Component, OnInit } from '@angular/core';
import {ArchitectsApiService} from '../../../core/services/architects-api.service';

@Component({
  selector: 'app-day-author',
  templateUrl: './day-author.component.html',
  styleUrls: ['./day-author.component.scss']
})
export class DayAuthorComponent implements OnInit {

  public randomArchitect;

  constructor(private architectsApi: ArchitectsApiService ) { }

  ngOnInit(): void {
    this.architectsApi.getAll().then(authors => this.randomArchitect = authors[Math.floor(Math.random() * authors.length)]);
  }
}
