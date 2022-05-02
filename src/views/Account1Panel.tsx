import { useState } from 'react';
import { Button, Input } from 'antd';
import './Account.css';
import { Account1 } from '../backend/Account1';
import { A1_ConcreteFactory } from '../backend/factory/A1_ConcreteFactory';
import { MDAEFSM } from '../backend/MdaEfsm';
import { OP } from '../backend/OP';
import { State } from '../backend/state/State';

export default function Account1Panel() {
  const [factory, setFactory] = useState(new A1_ConcreteFactory());
  const [op, setOP] = useState(new OP(factory.createDataStore(), factory));
  const [m, setM] = useState(new MDAEFSM(op));
  const [s, setState] = useState(m.s);
  m.setState = (state: State) => {
    m.s = state;
    setState(state);
    console.log('state change to: ', s.constructor.name);
  };
  const [account1, setAccount1] = useState(new Account1(m, factory.createDataStore()));
  const [p, setP] = useState(0);
  const [y, setY] = useState(0);
  const [a, setA] = useState(0);
  const [x, setX] = useState(0);
  const [d, setD] = useState(0);
  const [w, setW] = useState(0);
  return (
    <div className="account1-panel">
      <div className="header">Current State: {s.constructor.name}</div>
      <div className="operation">
        <span>Pin: </span>
        <Input
          placeholder="input the pin"
          value={p}
          onChange={(e) => {
            setP(Number(e.target.value));
          }}
        ></Input>
        <span>Id: </span>
        <Input
          placeholder="input user identification"
          value={y}
          onChange={(e) => {
            setY(Number(e.target.value));
          }}
        ></Input>
        <span>Balance: </span>
        <Input placeholder="input the balance" value={a} onChange={(e) => setA(Number(e.target.value))}></Input>
        <Button onClick={() => account1.open(p, y, a)}>open</Button>
      </div>
      <div className="operation">
        <span>Provides pin: </span>
        <Input value={x} onChange={(e) => setX(Number(e.target.value))}></Input>
        <Button onClick={() => account1.pin(x)}>pin</Button>
        <Button onClick={() => account1.lock(x)}>lock</Button>
        <Button onClick={() => account1.unlock(x)}>unlock</Button>
      </div>
      <div className="operation">
        <span>Deposite: </span>
        <Input value={d} onChange={(e) => setD(Number(e.target.value))}></Input>
        <Button onClick={() => account1.deposit(d)}>deposit</Button>
      </div>
      <div className="operation">
        <span>Withdraw: </span>
        <Input value={w} onChange={(e) => setW(Number(e.target.value))}></Input>
        <Button onClick={() => account1.withdraw(w)}>withdraw</Button>
      </div>
      <div className="operation">
        <Button onClick={() => account1.balance()}>balance</Button>
        <Button onClick={() => account1.logout()}>logout</Button>
      </div>
    </div>
  );
}