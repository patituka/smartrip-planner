import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CheckboxControl } from './checkbox.control';
import { ControlDescriptor } from './control';
import { DatetimeControl } from './datetime.control';
import { RangeControl } from './range.control';
import { SegmentControl } from './segment.control';
import { SelectControl } from './select.control';
import { TextareaControl } from './textarea.control';
import { TextboxControl } from './textbox.control';

@Injectable()
export class ControlsService {

  getControls(descriptors: ControlDescriptor[]) {

    let controls = descriptors.map((descriptor, index) => {
      let options = {
        ...descriptor,
        type: descriptor.type,
        key: descriptor.name,
        label: descriptor.title,
        value: '',
        required: descriptor.required,
        withLabel: descriptor.withLabel,
        order: index
      };

      switch (descriptor.type) {
        case 'text':
        case 'number':
          return new TextboxControl(options);
        case 'textarea':
          return new TextareaControl(options);
        case 'select':
          return new SelectControl(options);
        case 'datetime':
          return new DatetimeControl(options);
        case 'range':
          return new RangeControl(options);
        case 'segment':
          return new SegmentControl(options);
        case 'checkbox':
          return new CheckboxControl(options);
        default:
          console.error(`${descriptor.type} is not supported`);
      }
    });

    return controls.filter(x => !!x).sort((a, b) => a.order - b.order);
  }
  
}