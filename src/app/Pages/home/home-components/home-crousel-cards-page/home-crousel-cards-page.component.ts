import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home-crousel-cards-page',
  templateUrl: './home-crousel-cards-page.component.html',
  styleUrls: ['./home-crousel-cards-page.component.scss']
})
export class HomeCrouselCardsPageComponent implements AfterViewInit {
  @ViewChildren('productContainer') productContainers!: QueryList<ElementRef>;
  @ViewChildren('nxtBtn') nxtBtns!: QueryList<ElementRef>;
  @ViewChildren('preBtn') preBtns!: QueryList<ElementRef>;

  constructor() { }

  ngAfterViewInit() {
    this.productContainers.forEach((container, index) => {
      const item = container.nativeElement;
      const nxtBtn = this.nxtBtns.toArray()[index].nativeElement;
      const preBtn = this.preBtns.toArray()[index].nativeElement;

      const containerDimensions = item.getBoundingClientRect();
      const containerWidth = containerDimensions.width;

      nxtBtn.addEventListener('click', () => {
        item.scrollLeft += containerWidth;
      });

      preBtn.addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
      });
    });
  }
}
