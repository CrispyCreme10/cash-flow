import { Component } from '@angular/core';
import { AddFormComponent } from './add-form/add-form.component';
import { TrnTableComponent } from '../../../components/trn-table/trn-table.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-transactions-add',
  standalone: true,
  imports: [MatCardModule, AddFormComponent, TrnTableComponent],
  templateUrl: './transactions-add.component.html',
  styleUrl: './transactions-add.component.scss',
})
export class TransactionsAddComponent {}
