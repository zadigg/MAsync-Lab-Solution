let bankAccount: {
  money: number;
  deposit(value: number): void;
} = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  },
};
let myself: {
  name: string;
  bankAccount: typeof bankAccount;
  hobbies: string[];
} = {
  name: "John",
  bankAccount: bankAccount,
  hobbies: ["Violin", "Cooking"],
};

myself.bankAccount.deposit(3000);
console.log(myself);
