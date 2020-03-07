import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'cultural-portal';

  public languageForm: FormGroup;


  constructor(private translateService: TranslateService,
              private fb: FormBuilder) {
    this.initForm();
    this.setLanguage('en');
    this.languageForm.get('currentLanguage').valueChanges.subscribe(language => this.setLanguage(language));
  }

  public initForm() {
    this.languageForm = this.fb.group({
      currentLanguage: 'en'
    });
  }

  public setLanguage(language: string) {
    this.translateService.setDefaultLang(language);
  }
}
