import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TextInputComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent implements ControlValueAccessor {
  label = input.required<string>();
  placeholder = input<string>('');
  isInvalid = input<boolean>(false);
  errorMessage = input<string>('');

  textValue = '';
  touched = false;
  disabled = false;

  constructor() {
    effect(() => {
      console.log(this.errorMessage());
    });
  }

  onChange: (value: string) => void = (value) => {};
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.textValue = value;
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

    this.textValue = (event.target as HTMLInputElement).value;
    this.onChange(this.textValue);
  }
}
