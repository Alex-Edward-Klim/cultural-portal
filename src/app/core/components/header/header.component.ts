import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public navigator;

  constructor(private nav: NavigationService) { 
    this.navigator = this.nav.navMenu;
  }
}
