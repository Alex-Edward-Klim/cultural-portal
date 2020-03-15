import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import {environment} from '../../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ArchitectsApiService {

  private client = createClient({
    space: environment.contentFul.space,
    accessToken: environment.contentFul.accessToken
  });

  constructor() {}

  public getAll(): Promise<any> {
    return this.client.getEntries(Object.assign({
      content_type: environment.contentFul.contentType
    }))
      .then((res: any) => res.items[0].fields.architects);
  }
}
