import { ControlBase } from './control-base';

export class PlaceAutocompleteControl extends ControlBase<string> {
  controlType = 'place_autocomplete';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
