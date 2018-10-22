# 概要

`Angular CDK` に追加された `Virtual Scrolling`のサンプルプロジェクトです。

# 実行環境

* Node.js 10.9.x

# 使用ライブラリ

* Angular 7.0.x
* Angular CDK 7.0.x

# 動作確認  

## 1. サンプルのダウンロード

```
git clone git@github.com:yasu-s/ng-virtualscroll-sample.git
```

## 2. パッケージインストール  

```
cd ng-virtualscroll-sample
npm install
```

## 3. サンプルの起動  

```
npm start
```

## 4. 実行結果  

### Basic Scroll

![vs1](https://user-images.githubusercontent.com/2668146/47263364-21b38500-d53b-11e8-8af4-d7deee0a2583.gif)

### Virtual Scroll

![vs2](https://user-images.githubusercontent.com/2668146/47263370-3728af00-d53b-11e8-839a-a6d949f29366.gif)

# サンプルソース

## src/app/app.module.ts

```typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## src/app/app.component.html

```html
<h1>Virtual Scrolling Sample</h1>
<div>
  List Count: <input type="number" [(ngModel)]="listSize">
</div>
<div style="margin-top: 10px;">
  <div style="display: inline-block; margin-right: 10px;">
    <div>
      Basic Scrolling
    </div>
    <div>
      <button (click)="setBasicList(listSize)">Apply</button>
      <button (click)="setBasicList(0)">Clear</button>
    </div>
    <div>
      <div style="width: 200px; height: 200px; border: 1px solid black; overflow-y: auto;">
        <div *ngFor="let item of basicList" style="height: 20px;">{{ item }}</div>
      </div>
    </div>
  </div>
  <div style="display: inline-block;">
    <div>
      Virtual Scrolling
    </div>
    <div>
      <button (click)="setVirtualList(listSize)">Apply</button>
      <button (click)="setVirtualList(0)">Clear</button>
    </div>
    <div>
      <cdk-virtual-scroll-viewport itemSize="20" style="width: 200px; height: 200px; border: 1px solid black;">
        <div *cdkVirtualFor="let item of virtualList" style="height: 20px;">{{ item }}</div>
      </cdk-virtual-scroll-viewport>
    </div>
  </div>
</div>
```

## src/app/aap.component.ts

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  /** list item size */
  listSize = 100000;

  /** basic scroll list item */
  basicList: string[] = [];

  /** virtual scroll list item */
  virtualList: string[] = [];

  setBasicList(size: number): void {
    this.basicList = this.createList(size);
  }

  setVirtualList(size: number): void {
    this.virtualList = this.createList(size);
  }

  private createList(size: number): string[] {
    return Array.from({ length: size }).map((_, i) => `Item #${i}`);
  }
}
```
