import { 
  forwardRef,
  Component,
  Input,
  ViewChild,
  ElementRef,
  OnInit
} from '@angular/core';

import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormsModule,
} from '@angular/forms';

const noop = () => {};

export const MD_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true
};

@Component({
  selector: 'av-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss']
})
export class InputComponent implements ControlValueAccessor, OnInit {
  private _value: any = '';

  /** Callback registered via registerOnTouched (ControlValueAccessor) */
  private _onTouchedCallback: () => void = noop;
  /** Callback registered via registerOnChange (ControlValueAccessor) */
  private _onChangeCallback: (_: any) => void = noop;

  constructor() { }

  ngOnInit() {
  }

  get value(): any { return this._value; };
  @Input() set value(v: any) {

    if (v !== this._value) {
      this._value = v;
      this._onChangeCallback(v);
    }
  }


  @ViewChild('input') _inputElement: ElementRef;

  _handleChange(event: Event) {
    this.value = (<HTMLInputElement>event.target).value;
    this._onTouchedCallback();
  }

  /**
   * Implemented as part of ControlValueAccessor.
   * TODO: internal
   */
  writeValue(value: any) {
    this._value = value;
  }

  /**
   * Implemented as part of ControlValueAccessor.
   * TODO: internal
   */
  registerOnChange(fn: any) {
    this._onChangeCallback = fn;
  }

  /**
   * Implemented as part of ControlValueAccessor.
   * TODO: internal
   */
  registerOnTouched(fn: any) {
    this._onTouchedCallback = fn;
  }

}
