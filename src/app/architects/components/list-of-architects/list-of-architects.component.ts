import { Component, OnInit } from '@angular/core';
import { Architect } from '../../models/architect.interface';
import { ArchitectsApiService } from '../../../core/services/architects-api.service';

@Component({
  selector: 'app-list-of-architects',
  templateUrl: './list-of-architects.component.html',
  styleUrls: ['./list-of-architects.component.scss']
})
export class ListOfArchitectsComponent implements OnInit {
  public architects: Architect[] = [];
  public searchStr = '';

  constructor(private architectService: ArchitectsApiService) {}

  ngOnInit(): void {
    this.getArchitects();
  }

  public getArchitects(): void {
    this.architects = this.architectService.getAll();
  }
}
