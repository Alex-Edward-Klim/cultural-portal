import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { CarouselModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './components/architect-detailed/about/about.component';
import { ListOfArchitectsComponent } from './components/list-of-architects/list-of-architects.component';
import { ArchitectDetailedComponent } from './components/architect-detailed/architect-detailed.component';
import { ColoredDirective } from './directives/colored.directive';
import { SearchByPipe } from '../shared/pipes/search-by.pipe';
import { PhotoGalleryComponent } from './components/architect-detailed/photo-gallery/photo-gallery.component';
import { TimelineComponent } from './components/architect-detailed/timeline/timeline.component';
import { VideoComponent } from './components/architect-detailed/video/video.component';
import { MapComponent } from './components/architect-detailed/map/map.component';

@NgModule({
  declarations: [
    ListOfArchitectsComponent,
    ArchitectDetailedComponent,
    AboutComponent,
    ColoredDirective,
    PhotoGalleryComponent,
    SearchByPipe,
    TimelineComponent,
    VideoComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    FormsModule,
    RouterModule,
    CarouselModule,
    AnimateOnScrollModule,
    MDBBootstrapModule
  ],
  exports: [
    SearchByPipe,
  ],
})
export class ArchitectsModule {
}
