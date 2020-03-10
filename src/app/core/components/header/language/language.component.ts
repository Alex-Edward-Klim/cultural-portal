import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {

  private defaultLang = 'en';
  public currentLang: string = localStorage.getItem('lang') || this.defaultLang;
  public languageForm: FormGroup;

  constructor(private translateService: TranslateService,
              private fb: FormBuilder) {
    this.initForm();
    this.setLanguage(this.currentLang);
    this.languageForm.get('currentLanguage').valueChanges.subscribe(language => this.setLanguage(language));
  }

  public initForm() {
    this.languageForm = this.fb.group({
      currentLanguage: this.currentLang,
    });
  }

  public setLanguage(language: string) {
    this.translateService.setDefaultLang(language);
    localStorage.setItem('lang', language);
  }
}
