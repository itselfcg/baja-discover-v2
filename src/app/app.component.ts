import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'baja-discover-v2';
  ngOnInit(): void {
    AOS.init({ once: true });
    $('.scrollup').stop().fadeOut(100);
  }

  ngAfterViewInit() {
    window.addEventListener('load', AOS.refresh);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    var x = $(document).scrollTop();
    if (x > 500) {
      $('.scrollup').stop().fadeIn(100);
      $('.scrolldown').stop().fadeOut(100);
    } else {
      $('.scrolldown').stop().fadeIn(100);
      $('.scrollup').stop().fadeOut(100);
    }
  }
}
