import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/_model/tour';
import tours from '../../_files/tours.json';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),

        animate('500ms ease-in-out', style({ transform: 'translateX(0%)' })),
      ])
    ]),
  ],
})
export class ToursComponent implements OnInit {
  tours: Tour[] = tours;
  toursSelected: Tour = tours[0];
  curPage: number = 1;
  pageSize: number = 3;
  constructor() {}

  ngOnInit(): void {}

  selectTour(tour: Tour) {
    this.toursSelected = tour;
  }
  numberOfPages() {
    return Math.ceil(this.tours.length / this.pageSize);
  }
}
