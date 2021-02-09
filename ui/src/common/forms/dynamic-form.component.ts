/// <reference types="@types/googlemaps" />

import { Component, EventEmitter, Input, NgZone, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ControlBase } from './control-base';
import { DynamicControlsService } from './dynamic-controls.service';
import * as moment from 'moment';
declare var google; 


@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  exportAs: 'dynamicForm'
})
export class DynamicFormComponent implements OnInit {
  @Input() controls: ControlBase<any>[] = [];
  @Input() form: FormGroup;
  @Output() submit: EventEmitter<any> = new EventEmitter();


  GoogleAutocomplete: google.maps.places.AutocompleteService;
  autocomplete: { input: string; };
  autocompleteItems: any[];
  location: any;
  placeid: any;

  constructor(
    private controlsService: DynamicControlsService, 
    public zone: NgZone) {
      this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
      this.autocomplete = { input: '' };
      this.autocompleteItems = [];
    }

  public minDate: string = moment().format('YYYY-MM-DD');
  public maxDate: string = moment().add(3, 'y').format('YYYY');
  public today = moment().toDate();

  ngOnInit() {
    this.form = this.controlsService.toFormGroup(this.form, this.controls);

    this.form.addControl('name', new FormControl(''));

    console.log(this.controls);
  }

  get start(){
    return this.form.get('start').value;
  }

  onSubmit() {
    this.submit.next(this.form.value);
  }

  onSearchTerm($event){
    if ($event.detail.value == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: $event.detail.value },
    (predictions, status) => {
      this.autocompleteItems = [];
      this.zone.run(() => {
        predictions.forEach((prediction) => {
          this.autocompleteItems.push(prediction);
        });
      });
    });
  }
  selectSearchResult(item) {
    this.form.get('destination').setValue(item.description);
    this.autocompleteItems = [];

    this.location = item
    this.placeid = this.location.place_id
    console.log('placeid'+ this.placeid)
  }
  GoTo(){
    return window.location.href = 'https://www.google.com/maps/place/?q=place_id:'+this.placeid;
  }

}
