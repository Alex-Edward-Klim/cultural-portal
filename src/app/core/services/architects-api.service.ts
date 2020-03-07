import { Injectable } from '@angular/core';
import {ArchitectsData} from '../../../locales/architects-data';

@Injectable({
  providedIn: 'root'
})
export class ArchitectsApiService {

  public currentArchitect;

  constructor(private architectsData: ArchitectsData) {
    this.currentArchitect = this.architectsData.authors[0];
  }

  public getAll() {
    return this.architectsData.authors;
  }

  public getById(id: string) {
    return this.architectsData.authors.find(author => author.id === id);
  }

  public getRandom() {
    return this.architectsData.authors[Math.floor(Math.random() * this.architectsData.authors.length)];
  }
}
