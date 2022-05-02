import { MDAEFSM } from '../MdaEfsm';

export class State {
  m: MDAEFSM;
  constructor(m: MDAEFSM) {
    this.m = m;
  }
  Open() {}
  IncorectPin(max: number) {}
  CorrectPinAboveMinBalance() {}
  CorrectPinBelowMinBalance() {}
  Balance() {}
  Deposit() {}
  Withdraw() {}
  NoFunds() {}
  BelowMinBalance() {}
  AboveMinBalance() {}
  Login() {}
  IncorrectLogin() {}
  Logout() {}
  Lock() {}
  IncorrectLock() {}
  Unlock() {}
  IncorrectUnlock() {}
  Suspend() {}
  Activate() {}
  Close() {}
}
export class start extends State {
  Open() {
    this.m.op.StoreData();
    this.m.s = this.m.idle;
  }
}
export class idle extends State {
  Login() {
    this.m.op.PromptForPIN();
    this.m.s = this.m.check_pin;
  }
  IncorrectLogin() {
    this.m.op.IncorrectIdMsg();
  }
}
export class check_pin extends State {
  IncorrectPIN(max: number) {
    if (this.m.attempts === max) {
      this.m.op.IncorrectPinMsg();
      this.m.op.TooManyAttemptsMsg();
      this.m.s = this.m.idle;
    } else {
      this.m.op.IncorrectPinMsg();
      this.m.attempts++;
    }
  }
  Logout() {
    this.m.s = this.m.idle;
  }
  CorrectPinAboveMinBalance() {
    this.m.op.DisplayMenu();
    this.m.s = this.m.ready;
  }
  CorrectPinBelowMinBalance() {
    this.m.op.DisplayMenu();
    this.m.s = this.m.overdrawn;
  }
}
export class ready extends State {
  Logout() {
    this.m.s = this.m.idle;
  }
  Withdraw() {
    this.m.op.MakeWithdraw();
    this.m.s = this.m.S1;
  }
  NoFunds() {
    this.m.op.NoFundsMsg();
  }
  Balance() {
    this.m.op.DisplayBalance();
  }
  Deposit() {
    this.m.op.MakeDeposit();
    this.m.s = this.m.S2;
  }
  Suspend() {
    this.m.s = this.m.suspended;
  }
  Lock() {
    this.m.s = this.m.locked;
  }
  IncorrectLock() {
    this.m.op.IncorrectPinMsg();
  }
}
export class suspended extends State {
  Activate() {
    this.m.s = this.m.ready;
  }
  Balance() {
    this.m.op.DisplayBalance();
  }
  Close() {
    this.m.s = this.m.closed;
  }
}
export class S1 extends State {
  AboveMinBalance() {
    this.m.s = this.m.ready;
  }
  BelowMinBalance() {
    this.m.op.Penalty();
    this.m.s = this.m.overdrawn;
  }
}
export class overdrawn extends State {
  Lock() {
    this.m.s = this.m.locked;
  }
  IncorrectLock() {
    this.m.op.IncorrectPinMsg();
  }
  Withdraw() {
    this.m.op.NoFundsMsg();
  }
  Deposit() {
    this.m.op.MakeDeposit();
    this.m.s = this.m.S2;
  }
  Balance() {
    this.m.op.DisplayBalance();
  }
}
export class S2 extends State {
  AboveMinBalance() {
    this.m.s = this.m.ready;
  }
  BelowMinBalance() {
    this.m.s = this.m.overdrawn;
  }
}
export class locked extends State {
  Unlock() {
    this.m.s = this.m.S2;
  }
  IncorrectUnlock() {
    this.m.op.IncorrectUnlockMsg();
  }
}
export class closed extends State {}