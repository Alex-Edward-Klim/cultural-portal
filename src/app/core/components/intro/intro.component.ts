import { Component, OnInit } from '@angular/core';

import { NavigationService } from 'src/app/global-services/navigation.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(public navigationService: NavigationService) { }

  ngOnInit(): void {
  }

}
