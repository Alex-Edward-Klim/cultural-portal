import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurWorklogComponent } from './components/our-worklog/our-worklog.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [OurWorklogComponent],
  imports: [CommonModule, TranslateModule, MatExpansionModule, MatTableModule],
  exports: [OurWorklogComponent, MatExpansionModule, MatTableModule]
})
export class WorklogModule {}
