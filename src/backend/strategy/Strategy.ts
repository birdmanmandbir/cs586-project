import { DataStore } from "../DataStore";

export class StoreData{
  StoreData(ds: DataStore) {}
}
export class PromptForPIN{
  PromptForPIN() {}
}
export class DisplayMenu{
  DisplayMenu() {}
}
export class DisplayBalance{
  DisplayBalance(ds: DataStore) {}
}
export class IncorrectIdMsg{
  IncorrectIdMsg() {}
}
export class IncorrectPinMsg{
  IncorrectPinMsg() {}
}
export class IncorrectLockMsg{
  IncorrectLockMsg() {}
}
export class IncorrectUnlockMsg{
  IncorrectUnlockMsg() {}
}
export class TooManyAttemptsMsg{
  TooManyAttemptsMsg() {}
}
export class MakeDeposit{
  MakeDeposit(ds: DataStore) {}
}
export class MakeWithdraw{
  MakeWithdraw(ds: DataStore) {}
}
export class NoFundsMsg{
  NoFundsMsg() {}
}
export class Penalty{
  Penalty() {}
}