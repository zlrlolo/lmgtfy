import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'lmgtfy';
  searchval = "";
  newlink: string = "";
  active = 0;
  newsearch = "";
  animationOn = 1;
  timer = null;
  again = false;
  searchbarTouch = false;
  mousemove1 = false;
  mousemove2 = false;
  btSearchtouch = false;
  card = '写下你的问题，点击一个按钮'

  ngOnInit() {
    let url = new URL(location.href)
    let userSearch = url.searchParams.get("q");
    if (userSearch !== null) {
      this.again = true;
      this.mousemove1 = true;
      this.card='第一步，输入您的问题'
      const begin = setTimeout(() => {
        this.searchbarTouch = true;
        const t = setInterval(() => {
          let q = userSearch!.substring(0, 1)
          userSearch = userSearch!.slice(1);
          this.searchval += q
          if (!q) {
            clearInterval(t)
            this.mousemove1 = false;
            this.mousemove2 = true;
            this.card='第二步，点击搜索按钮'
            const w = setInterval(() => {
              this.btSearchtouch = true;
            }, 700);
            const l = setInterval(() => {
              this.card='动动手，搜一下也不难嘛。'
            }, 2100);
          }
        }, 300);
      }, 1500);
    }
  }

  clicksearch() {

  }

  sharelink() {
    const url = new URL("http://localhost:4200");
    url.searchParams.set('q', this.searchval)
    this.newlink = url.href;
    this.active = 1;
    this.newsearch = this.newlink
    this.card='复制或分享以下链接'
  }

}









