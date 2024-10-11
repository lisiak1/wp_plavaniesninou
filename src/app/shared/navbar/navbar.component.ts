import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { BreadcrumbsComponent } from 'src/app/components/breadcrumbs/breadcrumbs.component';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { Breadcrumb } from 'src/app/services/breadcrumbs.model';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    CommonModule,
    RouterModule,
    FooterComponent,
    BreadcrumbsComponent,
  ],
})
export class NavbarComponent implements OnInit, OnDestroy {
  @ViewChild('drawer') drawer: MatSidenav | undefined;

  showScrollToTop: boolean = true;

  breadcrumbs: Breadcrumb[] = [];
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private breadcrumbService: BreadcrumbService,
    private viewportScroller: ViewportScroller
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.drawer?.close();
      }
    });
  }

  ngOnInit() {
    this.breadcrumbService.breadcrumb$
      .pipe(takeUntil(this.destroy$))
      .subscribe((breadcrumbs) => {
        this.breadcrumbs = breadcrumbs;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  closeNav() {
    this.drawer?.close();
  }
}
