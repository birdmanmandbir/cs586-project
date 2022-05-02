import { AbstractFactory } from './AbstractFactory';
import { DataStore, DS2 } from '../DataStore';
import {
  A2_DisplayBalance,
  A2_DisplayMenu,
  A2_IncorrectIdMsg,
  A2_IncorrectLockMsg,
  A2_IncorrectPinMsg,
  A2_IncorrectUnlockMsg,
  A2_MakeDeposit,
  A2_MakeWithdraw,
  A2_NoFundsMsg,
  A2_Penalty,
  A2_PromptForPIN,
  A2_StoreData,
  A2_TooManyAttemptsMsg
} from '../strategy/A2_Strategy';

export class A2_ConcreteFactory implements AbstractFactory {
  d: DataStore = new DS2();
  storeData = new A2_StoreData();
  promptForPin = new A2_PromptForPIN();
  displayMenu = new A2_DisplayMenu();
  displayBalance = new A2_DisplayBalance();
  incorrectIdMsg = new A2_IncorrectIdMsg();
  incorrectPinMsg = new A2_IncorrectPinMsg();
  incorrectLockMsg = new A2_IncorrectLockMsg();
  incorrectUnlockMsg = new A2_IncorrectUnlockMsg();
  tooManyAttemptsMsg = new A2_TooManyAttemptsMsg();
  makeDeposit = new A2_MakeDeposit();
  makeWithdraw = new A2_MakeWithdraw();
  noFundsMsg = new A2_NoFundsMsg();
  penalty = new A2_Penalty();
  createDataStore(): DataStore {
    return this.d;
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
