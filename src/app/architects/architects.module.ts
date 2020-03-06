import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfArchitectsComponent } from './components/list-of-architects/list-of-architects.component';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
  declarations: [ListOfArchitectsComponent],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class ArchitectsModule { }
