import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ContentComponent} from './core/components/content/content.component';
import {IntroComponent} from './core/components/intro/intro.component';
import {MainComponent} from './main/components/main/main.component';
import {ListOfArchitectsComponent} from './architects/components/list-of-architects/list-of-architects.component';
import {OurTeamComponent} from './team/components/our-team/our-team.component';
import {OurWorklogComponent} from './worklog/components/our-worklog/our-worklog.component';
import {OurStyleguideComponent} from './styleguide/components/our-styleguide/our-styleguide.component';
import {PageNotFoundComponent} from './core/components/page-not-found/page-not-found.component';
import {ArchitectDetailedComponent} from './architects/components/architect-detailed/architect-detailed.component';

const routes: Routes = [
  {
    path: '',
    component: IntroComponent
  },
  {
    path: 'content',
    component: ContentComponent,
    children: [
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'architects',
        component: ListOfArchitectsComponent
      },
      {
        path: 'architects/:id',
        component: ArchitectDetailedComponent
      },
      {
        path: 'team',
        component: OurTeamComponent
      },
      {
        path: 'worklog',
        component: OurWorklogComponent
      },
      {
        path: 'styleguide',
        component: OurStyleguideComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
