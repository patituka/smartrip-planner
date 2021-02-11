import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP } from '@ionic-native/http/ngx';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ErrorHandler, NgModule } from '@angular/core';
 
import { CalendarModule, CalendarDateFormatter, CalendarEventTitleFormatter, DateAdapter } from 'angular-calendar';
 
import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
import { CustomDateFormatterService } from 'src/services/custom-date-formatter.service';
import { CustomEventTitleFormatterService } from 'src/services/custom-event-title-formatter.service';
registerLocaleData(localeDe);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    },
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatterService
    },
    {
      provide: CalendarEventTitleFormatter,
      useClass: CustomEventTitleFormatterService
    }, 
    HTTP
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
