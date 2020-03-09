import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { IntroComponent } from './components/intro/intro.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavigationService } from './services/navigation.service';

@NgModule({
  declarations: [HeaderComponent,
    FooterComponent,
    ContentComponent,
    IntroComponent,
    PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  providers: [NavigationService],
})
export class CoreModule { }
