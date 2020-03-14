import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurStyleguideComponent } from './components/our-styleguide/our-styleguide.component';
import {TranslateModule} from '@ngx-translate/core';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [OurStyleguideComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ]
})
export class StyleguideModule { }
