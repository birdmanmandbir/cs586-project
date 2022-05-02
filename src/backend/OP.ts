import { DataStore } from './DataStore';
import { AbstractFactory } from './factory/AbstractFactory';
export class OP {
  ds: DataStore;
  af: AbstractFactory;
  constructor(ds: DataStore, af: AbstractFactory) {
    this.ds = ds;
    this.af = af;
  }
  StoreData() {
    const storeData = this.af.createStoreData();
    storeData.StoreData();
  }
  PromptForPIN() {
    const promptForPIN = this.af.createPromptForPIN();
    promptForPIN.PromptForPIN();
  }
  DisplayMenu() {
    const displayMenu = this.af.createDisplayMenu();
    displayMenu.DisplayMenu();
  }
  DisplayBalance() {
    const displayBalance = this.af.createDisplayBalance();
    displayBalance.DisplayBalance(this.ds);
  }
  IncorrectIdMsg() {
    const incorrectIdMsg = this.af.createIncorrectIdMsg();
    incorrectIdMsg.IncorrectIdMsg();
  }
  IncorrectPinMsg() {
    const incorrectPinMsg = this.af.createIncorrectPinMsg();
    incorrectPinMsg.IncorrectPinMsg();
  }
  IncorrectLockMsg() {
    const incorrectLockMsg = this.af.createIncorrectLockMsg();
    incorrectLockMsg.IncorrectLockMsg();
  }
  IncorrectUnlockMsg() {
    const incorrectUnlockMsg = this.af.createIncorrectUnlockMsg();
    incorrectUnlockMsg.IncorrectUnlockMsg();
  }
  TooManyAttemptsMsg() {
    const tooManyAttemptsMsg = this.af.createTooManyAttemptsMsg();
    tooManyAttemptsMsg.TooManyAttemptsMsg();
  }
  MakeDeposit() {
    const makeDeposit = this.af.createMakeDeposit();
    makeDeposit.MakeDeposit();
  }
  MakeWithdraw() {
    const makeWithdraw = this.af.createMakeWithdraw();
    makeWithdraw.MakeWithdraw();
  }
  NoFundsMsg() {
    const noFundsMsg = this.af.createNoFundsMsg();
    noFundsMsg.NoFundsMsg();
  }
  Penalty() {
    const penalty = this.af.createPenalty();
    penalty.Penalty();
  }
}
