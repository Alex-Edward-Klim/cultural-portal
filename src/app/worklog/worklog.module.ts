import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurWorklogComponent } from './components/our-worklog/our-worklog.component';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
  declarations: [OurWorklogComponent],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class WorklogModule { }
