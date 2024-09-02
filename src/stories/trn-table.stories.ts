import { Meta, StoryObj } from '@storybook/angular';
import { TrnTableComponent } from '../app/components/trn-table/trn-table.component';

const meta: Meta<TrnTableComponent> = {
  title: 'Example/TrnTable',
  component: TrnTableComponent,
};

export default meta;
type Story = StoryObj<TrnTableComponent>;

export const PositiveNetIncome: Story = {
  args: {
    transactions: [
      {
        id: '1',
        accountId: '1',
        date: new Date(2024, 0, 1),
        name: 'Transaction 1',
        amount: 100,
        notes: 'Note 1',
      },
      {
        id: '2',
        accountId: '1',
        date: new Date(2024, 0, 2),
        name: 'Transaction 2',
        amount: 200,
        notes: 'Note 2',
      },
    ],
  },
};

export const NegativeNetIncome: Story = {
  args: {
    transactions: [
      {
        id: '1',
        accountId: '1',
        date: new Date(2024, 0, 1),
        name: 'Transaction 1',
        amount: -100,
        notes: 'Note 1',
      },
      {
        id: '2',
        accountId: '1',
        date: new Date(2024, 0, 2),
        name: 'Transaction 2',
        amount: -200,
        notes: 'Note 2',
      },
    ],
  },
};

export const ZeroNetIncome: Story = {
  args: {
    transactions: [
      {
        id: '1',
        accountId: '1',
        date: new Date(2024, 0, 1),
        name: 'Transaction 1',
        amount: 100,
        notes: 'Note 1',
      },
      {
        id: '2',
        accountId: '1',
        date: new Date(2024, 0, 2),
        name: 'Transaction 2',
        amount: -100,
        notes: 'Note 2',
      },
    ],
  },
};

export const EmptyTransactions: Story = {
  args: {
    transactions: [],
  },
};

export const Scrollable: Story = {
  args: {
    transactions: [
      {
        id: '1',
        accountId: '1',
        date: new Date(2024, 0, 1),
        name: 'Transaction 1',
        amount: 100,
        notes: 'Note 1',
      },
      {
        id: '2',
        accountId: '1',
        date: new Date(2024, 0, 2),
        name: 'Transaction 2',
        amount: 200,
        notes: 'Note 2',
      },
      {
        id: '3',
        accountId: '1',
        date: new Date(2024, 0, 3),
        name: 'Transaction 3',
        amount: 300,
        notes: 'Note 3',
      },
      {
        id: '4',
        accountId: '1',
        date: new Date(2024, 0, 4),
        name: 'Transaction 4',
        amount: 400,
        notes: 'Note 4',
      },
      {
        id: '5',
        accountId: '1',
        date: new Date(2024, 0, 5),
        name: 'Transaction 5',
        amount: 500,
        notes: 'Note 5',
      },
      {
        id: '6',
        accountId: '1',
        date: new Date(2024, 0, 6),
        name: 'Transaction 6',
        amount: 600,
        notes: 'Note 6',
      },
      {
        id: '7',
        accountId: '1',
        date: new Date(2024, 0, 7),
        name: 'Transaction 7',
        amount: 700,
        notes: 'Note 7',
      },
      {
        id: '8',
        accountId: '1',
        date: new Date(2024, 0, 8),
        name: 'Transaction 8',
        amount: 800,
        notes: 'Note 8',
      },
      {
        id: '9',
        accountId: '1',
        date: new Date(2024, 0, 9),
        name: 'Transaction 9',
        amount: 900,
        notes: 'Note 9',
      },
      {
        id: '10',
        accountId: '1',
        date: new Date(2024, 0, 10),
        name: 'Transaction 10',
        amount: 1000,
        notes: 'Note 10',
      },
      {
        id: '11',
        accountId: '1',
        date: new Date(2024, 0, 10),
        name: 'Transaction 11',
        amount: 1000,
        notes: 'Note 11',
      },
      {
        id: '12',
        accountId: '1',
        date: new Date(2024, 0, 10),
        name: 'Transaction 12',
        amount: 1000,
        notes: 'Note 12',
      },
      {
        id: '13',
        accountId: '1',
        date: new Date(2024, 0, 10),
        name: 'Transaction 13',
        amount: 1000,
        notes: 'Note 13',
      },
      {
        id: '14',
        accountId: '1',
        date: new Date(2024, 0, 10),
        name: 'Transaction 14',
        amount: 1000,
        notes: 'Note 14',
      },
      {
        id: '15',
        accountId: '1',
        date: new Date(2024, 0, 10),
        name: 'Transaction 15',
        amount: 1000,
        notes: 'Note 15',
      },
      {
        id: '16',
        accountId: '1',
        date: new Date(2024, 0, 10),
        name: 'Transaction 16',
        amount: 1000,
        notes: 'Note 16',
      },
      {
        id: '17',
        accountId: '1',
        date: new Date(2024, 0, 10),
        name: 'Transaction 17',
        amount: 1000,
        notes: 'Note 17',
      },
      {
        id: '18',
        accountId: '1',
        date: new Date(2024, 0, 10),
        name: 'Transaction 18',
        amount: 1000,
        notes: 'Note 18',
      },
      {
        id: '19',
        accountId: '1',
        date: new Date(2024, 0, 10),
        name: 'Transaction 19',
        amount: 1000,
        notes: 'Note 19',
      },
      {
        id: '20',
        accountId: '1',
        date: new Date(2024, 0, 10),
        name: 'Transaction 20',
        amount: 1000,
        notes: 'Note 20',
      },
    ],
  },
};
