import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit, AfterViewInit {

  public localStorageReferenceObject = localStorage;

  @ViewChild('mainHeading') public mainHeading;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      this.mainHeading.nativeElement.style.transform = 'translate(0px,' + Math.round(scrolled / 1.25) + '%)';
  });
  }

}
