import { Component, Inject, LOCALE_ID, ViewChild } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { CalendarEvent, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { addHours, startOfDay } from 'date-fns';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: 'timetable.page.html',
  styleUrls: ['timetable.page.scss']
})
export class TimetablePage {

  viewDate: Date = new Date();
  view = 'week';
  locale: string = 'fr';
  isDragging = false;
  refresh: Subject<any> = new Subject();
 
  events: CalendarEvent[] = [
    {
      start: addHours(startOfDay(new Date()), 7),
      end: addHours(startOfDay(new Date()), 9),
      title: 'First Event',
      cssClass: 'custom-event',
      color: {
        primary: '#488aff',
        secondary: '#bbd0f5'
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: addHours(startOfDay(new Date()), 10),
      end: addHours(startOfDay(new Date()), 12),
      title: 'Second Event',
      cssClass: 'custom-event',
      color: {
        primary: '#488aff',
        secondary: '#bbd0f5'
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];
 
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) { }
 
  async handleEvent(event: CalendarEvent) {
    let alert = await this.alertCtrl.create({
      header: event.title,
      message: event.start + ' to ' + event.end,
      buttons: ['OK']
    });
    alert.present();
  }
 
  eventTimesChanged({event, newStart, newEnd} : CalendarEventTimesChangedEvent): void {
    if (this.isDragging) {
      return;
    }
    this.isDragging = true;
 
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
 
    setTimeout(() => {
      this.isDragging = false;
    },1000);
  }
 
  hourSegmentClicked(event): void {
    let newEvent: CalendarEvent = {
      start: event.date,
      end: addHours(event.date, 1),
      title: 'TEST EVENT',
      cssClass: 'custom-event',
      color: {
        primary: '#488aff',
        secondary: '#bbd0f5'
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
 
    this.events.push(newEvent);
    this.refresh.next();
  }
}
