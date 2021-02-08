import { ControlBase } from './control-base';

export class SegmentControl extends ControlBase<string> {
  controlType = 'segment';
  options: { key: string, value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}