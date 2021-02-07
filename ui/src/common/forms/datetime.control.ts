import { ControlBase } from './control-base';

export class DatetimeControl extends ControlBase<string> {
  controlType = 'datetime';
  options: { key: string, value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}