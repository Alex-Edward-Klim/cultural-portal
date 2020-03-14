import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  @ViewChild('sidenav') sidenav: MatSidenav;
  @ViewChild('content') content: MatSidenavContent;
  public navigator;

  constructor(private nav: NavigationService) {
    this.navigator = this.nav.navMenu;
  }

  public open(): void {
    this.sidenav.open();
    this.content.getElementRef().nativeElement.classList.add('content-blocked');
  }

  public close(): void {
    this.sidenav.close();
    this.content.getElementRef().nativeElement.classList.remove('content-blocked');
  }
}
