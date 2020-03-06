import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { DayAuthorComponent } from './components/day-author/day-author.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    MainComponent,
    DayAuthorComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ]
})
export class MainModule { }
