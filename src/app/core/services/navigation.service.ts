import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {

  public navMenu = [
    {
      title: 'pageLinks.home',
      routing: '/',
    },
    {
      title: 'pageLinks.main',
      routing: '/content',
    },
    {
      title: 'pageLinks.listOfArchitects',
      routing: '/content/architects',
    },
    {
      title: 'pageLinks.workLog',
      routing: '/content/worklog',
    },
    {
      title: 'pageLinks.styleGuide',
      routing: '/content/styleguide',
    },

  ];
}
