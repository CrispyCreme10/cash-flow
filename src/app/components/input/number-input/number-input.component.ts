import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-number-input',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './number-input.component.html',
  styleUrl: './number-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NumberInputComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberInputComponent implements ControlValueAccessor {
  label = input.required<string>();
  placeholder = input<string>('');

  numberValue = 0;
  touched = false;
  disabled = false;

  onChange: (numberValue: number) => void = (numberValue) => {};
  onTouched: () => void = () => {};

  writeValue(numberValue: number): void {
    this.numberValue = numberValue;
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  onInput(event: Event): void {
    this.markAsTouched();
    if (this.disabled) return;

    this.numberValue = parseInt((event.target as HTMLInputElement).value) || 0;
    this.onChange(this.numberValue);
  }
}
