import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  withHashLocation,
  withInMemoryScrolling,
} from '@angular/router';
import { routes } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import localeSk from '@angular/common/locales/sk';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeSk);

bootstrapApplication(AppComponent, {
  providers: [
    { provide: LOCALE_ID, useValue: 'sk' },
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled', // This will scroll to top on navigation
        scrollPositionRestoration: 'enabled', // This will restore scroll position on navigation
      }),
      withHashLocation()
    ), // Enable hash-based routing
    provideAnimations(), // Provide animationss
    importProvidersFrom(
      MatExpansionModule,
      MatButtonModule,
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatSidenavModule,
      MatListModule,
      MatIconRegistry,
      CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory,
      })
    ), // Import Angular Material modules
  ],
}).catch((err) => console.error(err));
