import { Component, computed, input, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Transaction } from '../../models/transaction';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-trn-table',
  standalone: true,
  imports: [MatTableModule, DatePipe, CurrencyPipe],
  templateUrl: './trn-table.component.html',
  styleUrl: './trn-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrnTableComponent {
  transactions = input.required<Transaction[]>();
  netIncome = computed(() => this.calculateNetIncome());

  displayedColumns: string[] = ['date', 'name', 'amount'];

  /** Gets the total cost of all transactions. */
  calculateNetIncome = () =>
    this.transactions()
      .map((t) => t.amount)
      .reduce((acc, value) => acc + value, 0);
}
