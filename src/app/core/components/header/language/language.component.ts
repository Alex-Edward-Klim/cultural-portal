import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OurTranslateService } from '../../../../shared/services/translate.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {
  
  public languageForm: FormGroup;
  public currentLang: string;

  constructor(private translator: OurTranslateService, private fb: FormBuilder) {
    this.initForm();
    this.currentLang = this.translator.currentLang;
    this.languageForm.get('currentLanguage').valueChanges.subscribe(language => this.translator.setLanguage(language));
  }

  public initForm() {
    this.languageForm = this.fb.group({
      currentLanguage: this.translator.currentLang
    });
  }
}
