import { ControlBase } from './control-base';

export class RangeControl extends ControlBase<string> {
  controlType = 'range';
  options: { key: string, value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}