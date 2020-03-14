import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { DayAuthorComponent } from './components/day-author/day-author.component';
import { MatButtonModule } from '@angular/material/button';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    MainComponent,
    DayAuthorComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    TranslateModule,
    RouterModule
  ]
})
export class MainModule { }
