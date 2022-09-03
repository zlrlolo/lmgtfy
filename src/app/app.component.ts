import {Component, ElementRef, ViewChild} from '@angular/core';

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
  card = '写下你的问题，点击搜索按钮'

  @ViewChild('link')
  linkElement!: ElementRef;

  ngOnInit() {
    let url = new URL(location.href)
    let userSearch = url.searchParams.get("q");
    if (userSearch !== null) {
      this.again = true;
      this.mousemove1 = true;
      this.card = '第一步，输入一个问题'
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
            this.card = '第二步，点击搜索按钮'
            const w = setInterval(() => {
              this.btSearchtouch = true;
            }, 700);
            const l = setInterval(() => {
              this.card = '对你来说很难吗？'
            }, 2000);
            const n = setInterval(() => {
              const g_url = new URL("https://www.baidu.com/s");
              g_url.searchParams.set('wd', this.searchval)
              console.log(g_url.href)
              window.location.href = g_url.href
              clearInterval(n)
            }, 3100);
          }
        }, 300);
      }, 1500);
    }
  }

  sharelink() {
    if (this.searchval) {
      if (!this.again) {
        const url = new URL(location.href);
        url.searchParams.set('q', this.searchval)
        this.newlink = url.href;
        this.active = 1;
        this.newsearch = this.newlink
        this.card = '复制并分享给有需要的人'
      }
    }
  }

  // /**
  //  * @desc 复制纯文本到剪贴板
  //  * @param word - 纯文本
  //  */
  copyToClip() {
    const input: HTMLInputElement = this.linkElement.nativeElement
    // const input = document.createElement('input')
    // input.setAttribute('readonly', 'readonly')
    // input.setAttribute('value', this.newlink)
    // document.body.appendChild(input)
    input.setSelectionRange(0, 9999)
    input.select()
    if (document.execCommand('Copy')) {
      document.execCommand('Copy')
      this.card = '已复制到剪贴板!'
    }
    // document.body.removeChild(input)
  }


}









