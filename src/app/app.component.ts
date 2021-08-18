import { trigger, transition, style, animate } from '@angular/animations';
import { AfterViewInit, HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit,AfterViewInit {
  loading = true;
  title = 'baja-discover-v2';


  ngOnInit() {
    AOS.init({ once: true });
  }


  ngAfterViewInit() {
    window.addEventListener('load', AOS.refresh);
    this.loading = false;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    var x = $(document).scrollTop();
    if (x > 500) {
      $('.scrollup').show();
      $('.scrolldown').hide();
    } else {
      $('.scrolldown').show();
      $('.scrollup').hide();
    }
  }
}
