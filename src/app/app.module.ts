import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { OurTranslateService } from './shared/services/translate.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';
import { ArchitectsModule } from './architects/architects.module';
import { TeamModule } from './team/team.module';
import { WorklogModule } from './worklog/worklog.module';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { ScullyLibModule } from '@scullyio/ng-lib';

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
    MatInputModule,
    MDBBootstrapModule.forRoot(),
    AnimateOnScrollModule.forRoot(),
    ScullyLibModule
  ],
  providers: [
    OurTranslateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
