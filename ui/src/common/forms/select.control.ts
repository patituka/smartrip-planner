import { ControlBase } from './control-base';

export class SelectControl extends ControlBase<string> {
  controlType = 'select';
  isMultiple: boolean;
  options: { key: string, value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
    this.isMultiple = options['isMultiple'];

  }
}