import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class OurTranslateService {
  
  private defaultLang = 'en';
  public currentLang: string = localStorage.getItem('lang') || this.defaultLang;

  constructor(private translateService: TranslateService) { }

  public setLanguage(language: string) {
    this.translateService.setDefaultLang(language);
    localStorage.setItem('lang', language);
  }
}