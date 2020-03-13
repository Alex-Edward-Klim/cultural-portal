import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [OurTeamComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
  ],
  exports: [
    OurTeamComponent
  ]
})
export class TeamModule { }
