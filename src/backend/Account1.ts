import { MDAEFSM } from './MdaEfsm';
import { DataStore } from './DataStore';
export class Account1 {
  m: MDAEFSM;
  d: DataStore;
  constructor(m: MDAEFSM, d: DataStore) {
    this.m = m;
    this.d = d;
  }
  // open an account where p is a pin, y is an user’s identification #, and a is a balance
  open(p: number, y: number, a: number) {
    this.d.temp_p = p;
    this.d.temp_y = y;
    this.d.temp_a = a;
    this.m.Open()
  }
  // provides pin #
  pin(x: number) {
    if (x === this.d.p) {
      if (this.d.balance > 100) {
        this.m.CorrectPinAboveMinBalance()
      } else {
        this.m.CorrectPinBelowMinBalance()
      }
    } else {
      this.m.IncorrectPin(1)
    }
  }
  // deposit amount d
  deposit(d: number) {
    this.d.temp_d = d
    this.m.Deposit()
    if (this.d.balance > 100) {
      this.m.AboveMinBalance()
    } else {
      this.m.BelowMinBalance()
    }
  }
  // withdraw amount w
  withdraw(w: number) {
    this.d.temp_w = w
    this.m.Withdraw()
    if (this.d.balance > 100) {
      this.m.AboveMinBalance()
    } else {
      this.m.BelowMinBalance()
    }
  }
  // display the current balance
  balance() {
    this.m.Balance()
  }
  // login where y is a client’s identification #
  login(y: number) {
    if (y === this.d.id) {
      this.m.Login()
    } else {
      this.m.IncorrectLogin()
    }
  }
  // logout from the account
  logout() {
    this.m.Logout()
  }
  // locks an account where x is a pin
  lock(x: number) {
    if (x === this.d.p) {
      this.m.Lock()
    } else {
      this.m.IncorrectLock()
    }
  }
  // unlocks an account where x is a pin
  unlock(x: number) {
    if (x === this.d.p) {
      this.m.Unlock()
      if (this.d.balance > 100) {
        this.m.AboveMinBalance()
      } else {
        this.m.BelowMinBalance()
      }
    } else {
      this.m.IncorrectUnlock()
    }
  }
}
