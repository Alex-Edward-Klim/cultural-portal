import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {MatCardModule} from '@angular/material/card';

import {AboutComponent} from './components/architect-detailed/about/about.component';
import {ListOfArchitectsComponent} from './components/list-of-architects/list-of-architects.component';
import {ArchitectDetailedComponent} from './components/architect-detailed/architect-detailed.component';
import {ColoredDirective} from './directives/colored.directive';
import {PhotoVideoMapComponent} from './components/architect-detailed/photo-video-map/photo-video-map.component';
import {SearchByPipe} from '../shared/pipes/search-by.pipe';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {PhotoGalleryComponent} from './components/architect-detailed/photo-gallery/photo-gallery.component';
import {CarouselModule} from 'angular-bootstrap-md';
import {AnimateOnScrollModule} from 'ng2-animate-on-scroll';
import { TimelineComponent } from './components/architect-detailed/timeline/timeline.component';
import { VideoComponent } from './components/architect-detailed/video/video.component';

@NgModule({
  declarations: [
    ListOfArchitectsComponent,
    ArchitectDetailedComponent,
    AboutComponent,
    ColoredDirective,
    PhotoVideoMapComponent,
    PhotoGalleryComponent,
    SearchByPipe,
    TimelineComponent,
    VideoComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    FormsModule,
    RouterModule,
    CarouselModule,
    AnimateOnScrollModule,
  ],
  exports: [
    SearchByPipe,
  ],
})
export class ArchitectsModule {
}
