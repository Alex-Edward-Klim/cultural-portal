import { Component } from '@angular/core';
import { OurTranslateService } from './shared/services/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cultural-portal';

  constructor(private translator: OurTranslateService) {
    this.translator.setLanguage(this.translator.currentLang);
  }
}
