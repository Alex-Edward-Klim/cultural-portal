import {Component, Input, OnInit} from '@angular/core';
import {Architect} from '../../../models/architect.interface';
import {environment} from '../../../../../environments/environment.prod';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {

  private authorSet: Architect;

  @Input() set author(author: Architect) {
    this.authorSet = author;
    this.setYoutubeUrl();
  }

  get author(): Architect {
    return this.authorSet;
  }


  public src: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  private setYoutubeUrl() {
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(`${environment.youtubeUrl}${this.author.videoId}`);
  }

}
