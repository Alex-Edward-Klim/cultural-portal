import {Component, OnInit} from '@angular/core';
import {ArchitectService} from '../../services/architect.service';
import {Architect} from '../../models/architect.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-of-architects',
  templateUrl: './list-of-architects.component.html',
  styleUrls: ['./list-of-architects.component.scss']
})
export class ListOfArchitectsComponent implements OnInit {

  public architects: Architect[] = [];
  public searchStr = '';

  constructor(
    private architectService: ArchitectService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getArchitects();
  }

  public getArchitects(): void {
    this.architects = this.architectService.fetchArchitects();
  }

  public navigateToDetail(id: string): void {
    this.router.navigate(['content', 'architects', id]);
  }
}
