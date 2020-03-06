import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-author',
  templateUrl: './day-author.component.html',
  styleUrls: ['./day-author.component.scss']
})
export class DayAuthorComponent {

  constructor() { }

  public showDetailedPage() {
    console.log('go to detailed page');
  }
}
