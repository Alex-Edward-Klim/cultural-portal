import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurStyleguideComponent } from './components/our-styleguide/our-styleguide.component';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
  declarations: [OurStyleguideComponent],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class StyleguideModule { }
