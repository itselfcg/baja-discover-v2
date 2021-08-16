import {
  trigger,
  transition,
  style,
  animate,
  state,
  keyframes,
} from '@angular/animations';
import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/_model/tour';
import tours from '../../_files/tours.json';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss'],
  animations: [
    trigger('customAnimation', [
      transition(
        ':enter',
        [
          style({ transform: 'translateX(0%)' }),
          animate('500ms ease-in-out', style({ transform: 'translateX({{translate}}%)' })),
        ],
        { params: { translate: '100' } }
      ),
    ]),
  ],
})
export class ToursComponent implements OnInit {
  tours: Tour[] = tours;
  toursSelected: Tour = tours[0];
  curPage: number = 1;
  pageSize: number = 0;
  animationStyle = 0;
  constructor() {}

  ngOnInit(): void {
  if (window.innerWidth > 768) {
      this.pageSize = 3;
    } else {
      this.pageSize = 2;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth > 768) {
      this.pageSize = 3;
    } else {
      this.pageSize = 2;
    }
  }

  selectTour(tour: Tour) {
    this.toursSelected = tour;
  }
  numberOfPages() {
    return Math.ceil(this.tours.length / this.pageSize);
  }
}
