import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';
import { ArchitectsModule} from './architects/architects.module';
import { TeamModule } from './team/team.module';
import { WorklogModule } from './worklog/worklog.module';
import { StyleguideModule } from './styleguide/styleguide.module';
import { ArchitectsData } from '../locales/architects-data';
import { OurTranslateService } from './shared/services/translate.service';

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
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    ArchitectsData,
    OurTranslateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
