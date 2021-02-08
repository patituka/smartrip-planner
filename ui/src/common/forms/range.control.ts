import { ControlBase } from './control-base';

export class RangeControl extends ControlBase<string> {
  controlType = 'range';
  min: number;
  max: number
  icon: string;

  options: { key: string, value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);

    this.options = options['options'] || [];
    this.min = options['min'] || 0;
    this.max = options['max'] || 100;
    this.icon = options['icon'];
  }
}