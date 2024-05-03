import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';


@Component({
  selector: 'app-detail-carausel',
  templateUrl: './detail-carausel.component.html',
  styleUrl: './detail-carausel.component.scss'
})
export class DetailCarauselComponent implements AfterViewInit {
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
