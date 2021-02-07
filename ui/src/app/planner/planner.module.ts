import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlannerPage } from './planner.page';
import { PlannerPageRoutingModule } from './planner-routing.module';
import { DynamicFormModule } from 'src/common/forms/dynamic-form.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormModule,
    PlannerPageRoutingModule
  ],
  declarations: [PlannerPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlannerPageModule {}
