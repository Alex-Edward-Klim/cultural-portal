import {Injectable} from '@angular/core';
import {ArchitectsData} from '../../../locales/architects-data';
import {Architect} from '../../architects/models/architect.interface';

@Injectable({
  providedIn: 'root'
})
export class ArchitectsApiService {

  constructor(private architectsData: ArchitectsData) {
  }

  public getAll(): Architect[] {
    return this.architectsData.authors;
  }

  public getById(id: string): Architect {
    return this.architectsData.authors.find(author => author.id === id);
  }

  public getRandom(): Architect {
    return this.architectsData.authors[Math.floor(Math.random() * this.architectsData.authors.length)];
  }
}
