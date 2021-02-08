import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ControlsService } from './controls.service';
import { DynamicControlsService } from './dynamic-controls.service';
import { DynamicFormComponent } from './dynamic-form.component';

@NgModule({
  imports: [
    IonicModule, 
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DynamicControlsService, ControlsService],
  declarations: [DynamicFormComponent],
  exports: [DynamicFormComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DynamicFormModule {

}