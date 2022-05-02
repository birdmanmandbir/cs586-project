import { check_pin, idle, overdrawn, ready, S1, S2, start, State, suspended, locked, closed } from './state/State';
import { OP } from './OP';
export class MDAEFSM {
  op: OP;
  attempts: number;
  s: State;
  start = new start(this);
  idle = new idle(this);
  check_pin = new check_pin(this);
  ready = new ready(this);
  suspended = new suspended(this);
  S1 = new S1(this);
  overdrawn = new overdrawn(this);
  S2 = new S2(this);
  locked = new locked(this);
  closed = new closed(this);

  constructor(op: OP) {
    this.attempts = 0;
    this.op = op;
    this.s = this.start;
  }
  // TODO log cur state better
  Open() {
    this.s.Open();
  }
  IncorrectPin(max: number) {
    this.s.IncorectPin(max);
  }
  CorrectPinAboveMinBalance() {
    this.s.CorrectPinAboveMinBalance();
  }
  CorrectPinBelowMinBalance() {
    this.s.CorrectPinBelowMinBalance();
  }
  Balance() {
    this.s.Balance();
  }
  Deposit() {
    this.s.Deposit();
  }
  Withdraw() {
    this.s.Withdraw();
  }
  NoFunds() {
    this.s.NoFunds();
  }
  BelowMinBalance() {
    this.s.BelowMinBalance();
  }
  AboveMinBalance() {
    this.s.AboveMinBalance();
  }
  Login() {
    this.attempts = 0;
    this.s.Login();
  }
  IncorrectLogin() {
    this.s.IncorrectLogin();
  }
  Logout() {
    this.s.Logout();
  }
  Lock() {
    this.s.Lock();
  }
  IncorrectLock() {
    this.s.IncorrectLock();
  }
  Unlock() {
    this.s.Unlock();
  }
  IncorrectUnlock() {
    this.s.IncorrectUnlock();
  }
  Suspend() {
    this.s.Suspend();
  }
  Activate() {
    this.s.Activate();
  }
  Close() {
    this.s.Close();
  }
}
