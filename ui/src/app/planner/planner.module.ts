import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlannerPage } from './planner.page';
import { PlannerPageRoutingModule } from './planner-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PlannerPageRoutingModule
  ],
  declarations: [PlannerPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlannerPageModule {}
