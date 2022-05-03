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

const name = 'Account 1';

export class A1_StoreData extends StoreData {
  StoreData(ds: DataStore) {
    ds.setPin();
    ds.setBalance();
    ds.setId();
    message.success(`${name} - Store Data`)
  }
}
export class A1_PromptForPIN extends PromptForPIN {
  PromptForPIN() {
    message.info(`${name} - Please input the pin`);
  }
}
export class A1_DisplayMenu extends DisplayMenu {
  DisplayMenu() {
    message.success(`${name} - Menu is displayed`)
  }
}
export class A1_DisplayBalance extends DisplayBalance {
  DisplayBalance(ds: DataStore) {
    message.info(`${name} - Current Balance is: ${ds.balance}`);
  }
}
export class A1_IncorrectIdMsg extends IncorrectIdMsg {
  IncorrectIdMsg() {
    message.error(`${name} - Incorrect Id`);
  }
}
export class A1_IncorrectPinMsg extends IncorrectPinMsg {
  IncorrectPinMsg() {
    message.error(`${name} - Incorrect Pin`);
  }
}
export class A1_IncorrectLockMsg extends IncorrectLockMsg {
  IncorrectLockMsg() {
    message.error(`${name} - Incorrect Lock`);
  }
}
export class A1_IncorrectUnlockMsg extends IncorrectUnlockMsg {
  IncorrectUnlockMsg() {
    message.error(`${name} - Incorrect Unlock`);
  }
}
export class A1_TooManyAttemptsMsg extends TooManyAttemptsMsg {
  TooManyAttemptsMsg() {
    message.error(`${name} - Too Many Attempts`);
  }
}
export class A1_MakeDeposit extends MakeDeposit {
  MakeDeposit(ds: DataStore) {
    message.success(`${name} - Deposit`);
    ds.makeDeposit()
  }
}
export class A1_MakeWithdraw extends MakeWithdraw {
  MakeWithdraw(ds: DataStore) {
    message.success(`${name} - Withdraw`);
    ds.makeWithdraw()
  }
}
export class A1_NoFundsMsg extends NoFundsMsg {
  NoFundsMsg() {
    message.error(`${name} - No Funds`);
  }
}
export class A1_Penalty extends Penalty {
  Penalty(ds: DataStore) {
    message.info(`${name} - Penalty by 15`);
    ds.penalty()
  }
}
