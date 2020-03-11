import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {MainModule} from './main/main.module';
import {ArchitectsModule} from './architects/architects.module';
import {TeamModule} from './team/team.module';
import {WorklogModule} from './worklog/worklog.module';
import {StyleguideModule} from './styleguide/styleguide.module';
import {ArchitectsData} from '../locales/architects-data';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {AnimateOnScrollModule} from 'ng2-animate-on-scroll';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MainModule,
    ArchitectsModule,
    TeamModule,
    WorklogModule,
    StyleguideModule,
    MatInputModule,
    MDBBootstrapModule.forRoot(),
    AnimateOnScrollModule.forRoot()
  ],
  providers: [
    ArchitectsData
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
