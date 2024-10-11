import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { WeddingHomeComponent } from './components/wedding/wedding-home.component';
import { ScrollService } from './services/scroll.service';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    CommonModule,
    RouterModule,
    WeddingHomeComponent,
  ],
})
export class AppComponent implements OnInit {
  isDesktop: boolean = false;
  showScrollToTop: boolean = true;

  constructor(
    private scrollService: ScrollService,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const sidenavContent = document.querySelector('mat-sidenav-content');
        if (sidenavContent) {
          sidenavContent.scrollTop = 0;
        }

        setTimeout(() => {
          this.viewportScroller.scrollToPosition([0, 0]);
        }, 0);
      }
    });
  }

  checkScreenSize() {
    this.isDesktop = window.innerWidth > 450; // Adjust the width as needed
  }
}
