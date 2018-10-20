import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Virtual Scrolling Sample</h1>
    <div>
      List Count: <input type="number" [(ngModel)]="listSize">
    </div>
    <div>
      <div>
        Virtual Scrolling
      </div>
      <div>
        <button (click)="setVirtualList(listSize)">Apply</button>
        <button (click)="setVirtualList(0)">Clear</button>
      </div>
      <div>
        <cdk-virtual-scroll-viewport itemSize="20" class="example-viewport">
          <div *cdkVirtualFor="let item of virtualList" class="example-item">{{ item }}</div>
        </cdk-virtual-scroll-viewport>
      </div>
    </div>
  `,
  styles: [
    `.example-viewport { width: 200px; height: 200px; border: 1px solid black; }`,
    `.example-item { height: 20px; }`
  ]
})
export class AppComponent {

// #region fields

  /** */
  listSize = 100000;

  /** */
  basicList: string[] = [];

  /** */
  virtualList: string[] = [];

// #endregion

// #region methods

  /**
   *
   * @param size List Size
   */
  setBasicList(size: number): void {
    this.basicList = this.createList(size);
  }

  /**
   *
   * @param size List Size
   */
  setVirtualList(size: number): void {
    this.virtualList = this.createList(size);
  }

  /**
   *
   * @param size List Size
   */
  private createList(size: number): string[] {
    return Array.from({ length: size }).map((_, i) => `Item #${i}`);
  }

// #endregion

}
