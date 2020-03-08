import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {

  @Input() author;

  constructor() { }

  public ngOnInit(): void { }
}
