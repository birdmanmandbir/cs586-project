export interface DataStore {
  temp_p: number; // provides pin
  temp_y: number; // provides user id
  temp_a: number; // provides balance
  temp_d: number; // deposit amount
  temp_w: number; // withdraw amount
  balance: number; // balance
  p: number; // pin
  id: number; // user id
  setPin: () => void;
  setBalance: () => void;
  setId: () => void;
  makeDeposit: () => void;
  makeWithdraw: () => void;
  setUIBalance: (balance: number) => void;
  penalty: () => void;
}
export class DS1 implements DataStore {
  temp_p: number; // provides pin
  temp_y: number; // provides user id
  temp_a: number; // provides balance
  temp_d: number; // deposit amount
  temp_w: number; // withdraw amount
  balance: number; // balance
  p: number; // pin
  id: number; // user id
  setPin() {
    this.p = this.temp_p;
  }
  setBalance() {
    this.balance = this.temp_a;
  }
  setId() {
    this.id = this.temp_y;
  }
  makeDeposit() {
    this.balance = this.balance + this.temp_d;
    this.setUIBalance(this.balance);
  }
  makeWithdraw() {
    this.balance = this.balance - this.temp_w;
    this.setUIBalance(this.balance);
  }
  penalty() {
    this.balance = this.balance - 15;
    this.setUIBalance(this.balance);
  }
  setUIBalance: (balance: number) => void;
}
export class DS2 implements DataStore {
  temp_p: number; // provides pin
  temp_y: number; // provides user id
  temp_a: number; // provides balance
  temp_d: number; // deposit amount
  temp_w: number; // withdraw amount
  balance: number; // balance
  p: number; // pin
  id: number; // user id
  setPin() {
    this.p = this.temp_p;
  }
  setBalance() {
    this.balance = this.temp_a;
  }
  setId() {
    this.id = this.temp_y;
  }
  makeDeposit() {
    this.balance = this.balance + this.temp_d;
    this.setUIBalance(this.balance);
  }
  makeWithdraw() {
    this.balance = this.balance - this.temp_w;
    this.setUIBalance(this.balance);
  }
  setUIBalance: (balance: number) => void;
  penalty: () => void;
}
