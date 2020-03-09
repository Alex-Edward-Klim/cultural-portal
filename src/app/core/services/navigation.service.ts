import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {

  public navMenu = [
    {
      title: 'intro',
      routing: '/',
    },
    {
      title: 'Main',
      routing: '/content',
    },
    {
      title: 'Architectors',
      routing: '/content/architects',
    },
    {
      title: 'Worklog',
      routing: '/content/worklog',
    },
    {
      title: 'Slyleguide',
      routing: '/content/styleguide',
    },

  ]
}
