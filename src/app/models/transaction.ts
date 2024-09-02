export class Transaction {
  constructor(
    public id: string = '',
    public accountId: string = '',
    public date: Date = new Date(1970, 0, 1),
    public name: string = '',
    public amount: number = 0,
    public category: string = '',
    public tags: string = '',
    public notes: string = '',
  ) {}
}
