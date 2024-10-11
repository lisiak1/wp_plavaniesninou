import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { Breadcrumb } from 'src/app/services/breadcrumbs.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  breadcrumbs: Breadcrumb[] = [];
  private destroy$ = new Subject<void>();

  constructor(private breadcrumbService: BreadcrumbService) {}

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
}
