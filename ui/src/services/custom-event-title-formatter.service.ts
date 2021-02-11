import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
import { Injectable } from '@angular/core';
 
@Injectable()
export class CustomEventTitleFormatterService extends CalendarEventTitleFormatter {
 
  dayTooltip(event: CalendarEvent): string {
    return;
  }
}