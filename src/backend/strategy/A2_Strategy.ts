import { message } from 'antd';
import { DataStore } from '../DataStore';
import {
  DisplayBalance,
  DisplayMenu,
  IncorrectIdMsg,
  IncorrectLockMsg,
  IncorrectPinMsg,
  IncorrectUnlockMsg,
  MakeDeposit,
  MakeWithdraw,
  NoFundsMsg,
  Penalty,
  PromptForPIN,
  StoreData,
  TooManyAttemptsMsg
} from './Strategy';

const name = 'Account 2';

export class A2_StoreData extends StoreData {
  StoreData(ds: DataStore) {
    ds.setPin();
    ds.setBalance();
    ds.setId();
    message.success(`${name} - Store Data`)
  }
}
export class A2_PromptForPIN extends PromptForPIN {
  PromptForPIN() {
    message.info(`${name} - Please input the pin`);
  }
}
export class A2_DisplayMenu extends DisplayMenu {
  DisplayMenu() {
    message.info(`${name} - Menu is displayed`)
  }
}
export class A2_DisplayBalance extends DisplayBalance {
  DisplayBalance(ds: DataStore) {
    message.info(`${name} - Current Balance is: ${ds.balance}`);
  }
}
export class A2_IncorrectIdMsg extends IncorrectIdMsg {
  IncorrectIdMsg() {
    message.error(`${name} - Incorrect Id`);
  }
}
export class A2_IncorrectPinMsg extends IncorrectPinMsg {
  IncorrectPinMsg() {
    message.error(`${name} - Incorrect Pin`);
  }
}
export class A2_IncorrectLockMsg extends IncorrectLockMsg {
  IncorrectLockMsg() {
    message.error(`${name} - Incorrect Lock`);
  }
}
export class A2_IncorrectUnlockMsg extends IncorrectUnlockMsg {
  IncorrectUnlockMsg() {
    message.error(`${name} - Incorrect Unlock`);
  }
}
export class A2_TooManyAttemptsMsg extends TooManyAttemptsMsg {
  TooManyAttemptsMsg() {
    message.error(`${name} - Too Many Attempts`);
  }
}
export class A2_MakeDeposit extends MakeDeposit {
  MakeDeposit(ds: DataStore) {
    message.success(`${name} - Deposit`);
    ds.makeDeposit()
  }
}
export class A2_MakeWithdraw extends MakeWithdraw {
  MakeWithdraw(ds: DataStore) {
    message.success(`${name} - Withdraw`);
    ds.makeWithdraw()
  }
}
export class A2_NoFundsMsg extends NoFundsMsg {
  NoFundsMsg() {
    message.error(`${name} - No Funds`);
  }
}
export class A2_Penalty extends Penalty {}
