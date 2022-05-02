import { DataStore } from "../DataStore";
import { DisplayBalance, DisplayMenu, IncorrectIdMsg, IncorrectLockMsg, IncorrectPinMsg, IncorrectUnlockMsg, MakeDeposit, MakeWithdraw, NoFundsMsg, Penalty, PromptForPIN, StoreData, TooManyAttemptsMsg } from "../strategy/Strategy";

export interface AbstractFactory {
  createDataStore(): DataStore;
  createStoreData(): StoreData;
  createPromptForPIN(): PromptForPIN;
  createDisplayMenu(): DisplayMenu;
  createDisplayBalance(): DisplayBalance;
  createIncorrectIdMsg(): IncorrectIdMsg;
  createIncorrectPinMsg(): IncorrectPinMsg;
  createIncorrectLockMsg(): IncorrectLockMsg;
  createIncorrectUnlockMsg(): IncorrectUnlockMsg;
  createTooManyAttemptsMsg(): TooManyAttemptsMsg;
  createMakeDeposit(): MakeDeposit;
  createMakeWithdraw(): MakeWithdraw;
  createNoFundsMsg(): NoFundsMsg;
  createPenalty(): Penalty;
}
