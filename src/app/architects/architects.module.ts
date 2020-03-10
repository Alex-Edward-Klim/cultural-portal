import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {MatCardModule} from '@angular/material/card';

import {AboutComponent} from './components/architect-detailed/about/about.component';
import {ListOfArchitectsComponent} from './components/list-of-architects/list-of-architects.component';
import {ArchitectDetailedComponent} from './components/architect-detailed/architect-detailed.component';
import {ColoredDirective} from './directives/colored.directive';
import {BiographyComponent} from './components/architect-detailed/biography/biography.component';
import {PhotoVideoMapComponent} from './components/architect-detailed/photo-video-map/photo-video-map.component';
import {SearchByPipe} from '../shared/pipes/search-by.pipe';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {PhotoGalleryComponent} from './components/architect-detailed/photo-gallery/photo-gallery.component';
import {CarouselModule} from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    ListOfArchitectsComponent,
    ArchitectDetailedComponent,
    AboutComponent,
    ColoredDirective,
    BiographyComponent,
    PhotoVideoMapComponent,
    PhotoGalleryComponent,
    SearchByPipe,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    FormsModule,
    RouterModule,
    CarouselModule,
  ],
  exports: [
    SearchByPipe,
  ],
})
export class ArchitectsModule {
}
