import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from './control-base';
import { DynamicControlsService } from './dynamic-controls.service';
import * as moment from 'moment';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  exportAs: 'dynamicForm'
})
export class DynamicFormComponent implements OnInit {
  @Input() controls: ControlBase<any>[] = [];
  @Input() form: FormGroup;
  @Output() submit: EventEmitter<any> = new EventEmitter();

  constructor(private controlsService: DynamicControlsService) {}

  public minDate: string = moment().format('YYYY-MM-DD');
  public maxDate: string = moment().add(3, 'y').format('YYYY');
  public today = moment().toDate();

  ngOnInit() {
    this.form = this.controlsService.toFormGroup(this.form, this.controls);


    console.log(this.controls);
  }

  get start(){
    return this.form.get('start').value;
  }

  onSubmit() {
    this.submit.next(this.form.value);
  }
}