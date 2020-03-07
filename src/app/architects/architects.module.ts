import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ArchitectInfoService } from './services/architect-info.service';
import { AboutComponent } from './components/architect-detailed/about/about.component';
import { ListOfArchitectsComponent } from './components/list-of-architects/list-of-architects.component';
import { ArchitectDetailedComponent } from './components/architect-detailed/architect-detailed.component';
import { ColoredDirective } from './directives/colored.directive';
import { BiographyComponent } from './components/architect-detailed/biography/biography.component';

@NgModule({
  declarations: [
    ListOfArchitectsComponent,
    ArchitectDetailedComponent,
    AboutComponent,
    ColoredDirective,
    BiographyComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
  ],
  providers: [
    ArchitectInfoService
  ]
})
export class ArchitectsModule { }
