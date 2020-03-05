import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToMain() {
    this.router.navigate(['/content']);
  }

  goToList() {
    this.router.navigate(['/content/architects']);
  }

  goToTeam() {
    this.router.navigate(['/content/team']);
  }

  goToWorklog() {
    this.router.navigate(['/content/worklog']);
  }

  goToStyleguide() {
    this.router.navigate(['/content/styleguide']);
  }

}
