import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lmgtfy';
  searchval: any;
  newlink: string = '';
  active = 0;
  newsearch: any;
  animationOn=1;

  sharelink() {
    const url = new URL("https://google.com");
    url.searchParams.set('q', this.searchval)
    this.newlink = url.href;
    this.active = 1;
    this.newsearch = this.newlink
  }
}



