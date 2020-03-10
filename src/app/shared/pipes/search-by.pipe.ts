import { Pipe, PipeTransform } from '@angular/core';
import { Architect } from '../../architects/models/architect.interface';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'searchBy'
})
export class SearchByPipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  public transform(list: Architect[], search: string = ''): Architect[] {
    if (!search.trim()) {
      return list;
    }

    return list.filter(item =>
      this.translate
        .instant(`${item.path}.${item.searchKey}`)
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }
}
