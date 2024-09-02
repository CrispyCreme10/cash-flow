import { Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DateInputComponent } from '../../../../components/input/date-input/date-input.component';
import { NumberInputComponent } from '../../../../components/input/number-input/number-input.component';
import { SelectAutocompleteComponent } from '../../../../components/input/select-autocomplete/select-autocomplete.component';
import { TextInputComponent } from '../../../../components/input/text-input/text-input.component';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    TextInputComponent,
    DateInputComponent,
    SelectAutocompleteComponent,
    NumberInputComponent,
    MatButtonModule,
  ],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.scss',
})
export class AddFormComponent {
  fb = inject(FormBuilder);

  // TEST - fetch from api eventually
  categories = ['Groceries', 'Rent', 'Utilities', 'Transport'];

  addTrnForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    date: [new Date(1970, 0, 1), Validators.required],
    category: [''],
    amount: ['', Validators.required],
  });

  nameErrorMessage = signal<string>('');

  constructor() {
    const nameControl = this.addTrnForm.get('name');
    if (nameControl !== null) {
      merge(nameControl.valueChanges, nameControl.statusChanges)
        .pipe(takeUntilDestroyed())
        .subscribe(() => this.updateNameErrorMessage(nameControl));
    }
  }

  updateNameErrorMessage(nameControl: AbstractControl): void {
    if (nameControl.hasError('required')) {
      this.nameErrorMessage.set('Name is required');
    }
  }

  onSubmit(): void {
    console.log(this.addTrnForm.value);
  }
}
