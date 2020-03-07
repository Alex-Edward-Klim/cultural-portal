import { Injectable } from '@angular/core';
import { ArchitectsData } from 'src/locales/architects-data';

@Injectable()
export class ArchitectInfoService {

  public currentArchitect;

  constructor(private storage: ArchitectsData) {
    this.currentArchitect = this.storage.authors[2];
  }
}
