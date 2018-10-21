import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

// #region fields

  /** list item size */
  listSize = 100000;

  /** basic scroll list item */
  basicList: string[] = [];

  /** virtual scroll list item */
  virtualList: string[] = [];

// #endregion

// #region methods

  /**
   * set basic scroll list item.
   * @param size List Size
   */
  setBasicList(size: number): void {
    this.basicList = this.createList(size);
  }

  /**
   * set virtual scroll list item.
   * @param size List Size
   */
  setVirtualList(size: number): void {
    this.virtualList = this.createList(size);
  }

  /**
   * Create List
   * @param size List Size
   */
  private createList(size: number): string[] {
    return Array.from({ length: size }).map((_, i) => `Item #${i}`);
  }

// #endregion

}
