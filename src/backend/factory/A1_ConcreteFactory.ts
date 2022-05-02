import { AbstractFactory } from './AbstractFactory';
import { DataStore, DS1 } from '../DataStore';
import {
  A1_DisplayBalance,
  A1_DisplayMenu,
  A1_IncorrectIdMsg,
  A1_IncorrectLockMsg,
  A1_IncorrectPinMsg,
  A1_IncorrectUnlockMsg,
  A1_MakeDeposit,
  A1_MakeWithdraw,
  A1_NoFundsMsg,
  A1_Penalty,
  A1_PromptForPIN,
  A1_StoreData,
  A1_TooManyAttemptsMsg
} from '../strategy/A1_Strategy';

export class A1_ConcreteFactory implements AbstractFactory {
  ds: DataStore = new DS1();
  storeData = new A1_StoreData();
  promptForPin = new A1_PromptForPIN();
  displayMenu = new A1_DisplayMenu();
  displayBalance = new A1_DisplayBalance();
  incorrectIdMsg = new A1_IncorrectIdMsg();
  incorrectPinMsg = new A1_IncorrectPinMsg();
  incorrectLockMsg = new A1_IncorrectLockMsg();
  incorrectUnlockMsg = new A1_IncorrectUnlockMsg();
  tooManyAttemptsMsg = new A1_TooManyAttemptsMsg();
  makeDeposit = new A1_MakeDeposit();
  makeWithdraw = new A1_MakeWithdraw();
  noFundsMsg = new A1_NoFundsMsg();
  penalty = new A1_Penalty();
  createDataStore(): DataStore {
    return this.ds;
  }
  createStoreData() {
    return this.storeData;
  }
  createPromptForPIN() {
    return this.promptForPin;
  }
  createDisplayMenu() {
    return this.displayMenu;
  }
  createDisplayBalance() {
    return this.displayBalance;
  }
  createIncorrectIdMsg() {
    return this.incorrectIdMsg;
  }
  createIncorrectPinMsg() {
    return this.incorrectPinMsg;
  }
  createIncorrectLockMsg() {
    return this.incorrectLockMsg;
  }
  createIncorrectUnlockMsg() {
    return this.incorrectUnlockMsg;
  }
  createTooManyAttemptsMsg() {
    return this.tooManyAttemptsMsg;
  }
  createMakeDeposit() {
    return this.makeDeposit;
  }
  createMakeWithdraw() {
    return this.makeWithdraw;
  }
  createNoFundsMsg() {
    return this.noFundsMsg;
  }
  createPenalty() {
    return this.penalty;
  }
}
