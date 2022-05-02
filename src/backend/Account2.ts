import { MDAEFSM } from './MdaEfsm';
import { DataStore } from './DataStore';
export class Account2 {
  m: MDAEFSM;
  d: DataStore;
  constructor(m: MDAEFSM, d: DataStore) {
    this.m = m;
    this.d = d;
  }
  // open an account where p is a pin, y is an user’s identification #, and a is a balance
  OPEN(p: number, y: number, a: number) {
    this.d.temp_p = p;
    this.d.temp_y = y;
    this.d.temp_a = a;
    this.m.Open();
  }
  // provides pin #
  PIN(x: number) {
    if (x === this.d.p) {
      this.m.CorrectPinAboveMinBalance();
    } else {
      this.m.IncorrectPin(2);
    }
  }
  // deposit amount d
  DEPOSIT(d: number) {
    this.d.temp_d = d;
    this.m.Deposit();
    this.m.AboveMinBalance();
  }
  // withdraw amount w
  WITHDRAW(w: number) {
    this.d.temp_w = w;
    if (this.d.balance > 0) {
      this.m.Withdraw();
      this.m.AboveMinBalance();
    } else {
      this.m.NoFunds();
    }
  }
  // display the current balance
  BALANCE() {
    this.m.Balance();
  }
  // login where y is a client’s identification #
  LOGIN(y: number) {
    if (y == this.d.id) {
      this.m.Login();
    } else {
      this.m.IncorrectLogin();
    }
  }
  // logout from the account
  LOGOUT() {
    this.m.Logout();
  }
  // suspends an account
  suspend() {
    this.m.Suspend();
  }
  // activates a suspended account
  activate() {
    this.m.Activate();
  }
  // an account is closed
  close() {
    this.m.Close();
  }
}
