import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimetablePage } from './timetable.page';
import { TimetablePageRoutingModule } from './timetable-routing.module';
import { CalendarModule } from 'angular-calendar';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TimetablePage }]),
    TimetablePageRoutingModule,
    CommonModule,
    FormsModule,
    CalendarModule
  ],
  declarations: [TimetablePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TimetablePageModule {}
