import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { DayAuthorComponent } from './components/day-author/day-author.component';
import { MatButtonModule } from '@angular/material/button';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    MainComponent,
    DayAuthorComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    TranslateModule
  ],
  providers: [
  ]
})
export class MainModule { }
