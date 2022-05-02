export interface DataStore{
  temp_p: number // provides pin
  temp_y: number // provides user id
  temp_a: number // provides balance
  temp_d: number // deposit amount
  temp_w: number // withdraw amount
  balance: number // balance
  p: number // pin
  id: number // user id  
}
export class DS1 implements DataStore{
  temp_p: number // provides pin
  temp_y: number // provides user id
  temp_a: number // provides balance
  temp_d: number // deposit amount
  temp_w: number // withdraw amount
  balance: number // balance
  p: number // pin
  id: number // user id
}
export class DS2 implements DataStore {
  temp_p: number // provides pin
  temp_y: number // provides user id
  temp_a: number // provides balance
  temp_d: number // deposit amount
  temp_w: number // withdraw amount
  balance: number // balance
  p: number // pin
  id: number // user id
}
