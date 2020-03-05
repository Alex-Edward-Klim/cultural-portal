import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { IntroComponent } from './components/intro/intro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ContentComponent, IntroComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
