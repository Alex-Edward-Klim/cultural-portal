import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {MatCardModule} from '@angular/material/card';

import { ArchitectInfoService } from './services/architect-info.service';
import { AboutComponent } from './components/architect-detailed/about/about.component';
import { ListOfArchitectsComponent } from './components/list-of-architects/list-of-architects.component';
import { ArchitectDetailedComponent } from './components/architect-detailed/architect-detailed.component';
import { ColoredDirective } from './directives/colored.directive';
import { BiographyComponent } from './components/architect-detailed/biography/biography.component';
import { PhotoVideoMapComponent } from './components/architect-detailed/photo-video-map/photo-video-map.component';

@NgModule({
  declarations: [
    ListOfArchitectsComponent,
    ArchitectDetailedComponent,
    AboutComponent,
    ColoredDirective,
    BiographyComponent,
    PhotoVideoMapComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule
  ],
  providers: [
    ArchitectInfoService
  ]
})
export class ArchitectsModule { }
