import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatDatepickerInputEvent,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
  ],
  templateUrl: './date-input.component.html',
  styleUrl: './date-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: DateInputComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateInputComponent implements ControlValueAccessor {
  label = input<string>('Choose a date');

  dateValue = new Date(1970, 0, 1);
  touched = false;
  disabled = false;

  onChange: (date: Date) => void = (value) => {};
  onTouched: () => void = () => {};

  writeValue(date: Date): void {
    this.dateValue = date;
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

  onDateChange(event: MatDatepickerInputEvent<Date>): void {
    this.markAsTouched();
    if (this.disabled || !event.value) return;

    this.dateValue = event.value;
    this.onChange(this.dateValue);
  }
}
