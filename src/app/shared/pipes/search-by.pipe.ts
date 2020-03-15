import { Pipe, PipeTransform } from '@angular/core';
import { Architect } from '../../architects/models/architect.interface';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'searchBy'
})
export class SearchByPipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  public transform(list: Architect[], search: string = '', noDataElem: HTMLDivElement): Architect[] {
    if (!search) { noDataElem.classList.add('hide-elem'); }
    if (!search.trim()) {
      return list;
    }
    const result = list.filter(item =>
      this.translate
        .instant(`${item.path}.${item.searchKey}`)
        .toLowerCase()
        .includes(search.toLowerCase())
    );
    (result.length === 0) ? noDataElem.classList.remove('hide-elem') : noDataElem.classList.add('hide-elem');
    return result;
  }
}
