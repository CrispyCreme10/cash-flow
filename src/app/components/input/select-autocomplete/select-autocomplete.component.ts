import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-select-autocomplete',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './select-autocomplete.component.html',
  styleUrl: './select-autocomplete.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SelectAutocompleteComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectAutocompleteComponent
  implements OnInit, ControlValueAccessor
{
  label = input.required<string>();
  placeholder = input<string>('');
  options = input.required<string[]>();

  inputFormControl = new FormControl('');
  filteredOptions!: Observable<string[]>;

  ngOnInit(): void {
    this.filteredOptions = this.inputFormControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options().filter((option) =>
      option.toLowerCase().includes(filterValue),
    );
  }

  touched = false;
  disabled = false;

  onChange: (value: string) => void = (value) => {};
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.inputFormControl.setValue(value);
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

    this.onChange((event.target as HTMLInputElement).value);
  }
}
