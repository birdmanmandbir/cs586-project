import { useState } from "react";
import { Button, Input } from 'antd';
import './Account.css'
import { Account1 } from "../backend/Account1";
import { A1_ConcreteFactory } from "../backend/factory/A1_ConcreteFactory";
import { MDAEFSM } from "../backend/MdaEfsm";
import { OP } from "../backend/OP";

export default function Account1Panel() {
  const [factory, setFactory] = useState(new A1_ConcreteFactory());
  const [op, setOP] = useState(new OP(factory.createDataStore(), factory))
  const [m, setM] = useState(new MDAEFSM(op))
  const [account1, setAccount1] = useState(new Account1(m, factory.createDataStore()))
  const [pin, setPin] = useState(0);
  const [id, setId] = useState(0);
  const [balance, setBalance] = useState(0);
  return (
    <div className="account1-panel">
      <div className="header">Current State: {m.s.constructor.name}</div>
      <span>Pin: </span>
      <Input placeholder="input the pin" value={pin} onChange={(e) => { setPin(Number(e.target.value)) }}></Input>
      <span>Id: </span>
      <Input placeholder="input user identification" value={id} onChange={(e) => { setId(Number(e.target.value)) }}></Input>
      <span>Balance: </span>
      <Input placeholder="input the balance" value={balance} onChange={(e) => setBalance(Number(e.target.value))}></Input>
      <Button onClick={() => account1.open(pin, id, balance)}>open</Button>
    </div>
  )
}