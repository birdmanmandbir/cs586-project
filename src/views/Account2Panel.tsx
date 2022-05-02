import { useState } from 'react';
import { Button, Input } from 'antd';
import './Account.css';
import { Account2 } from '../backend/Account2';
import { A2_ConcreteFactory } from '../backend/factory/A2_ConcreteFactory';
import { MDAEFSM } from '../backend/MdaEfsm';
import { OP } from '../backend/OP';

export default function Account2Panel() {
  const [factory, setFactory] = useState(new A2_ConcreteFactory());
  const [op, setOP] = useState(new OP(factory.createDataStore(), factory));
  const [m, setM] = useState(new MDAEFSM(op));
  const [s, setState] = useState(m.s);
  const [account2, setAccount1] = useState(new Account2(m, factory.createDataStore()));
  // pin
  const [p, setP] = useState(0);
  // id
  const [y, setY] = useState(0);
  // balance
  const [a, setA] = useState(0);
  // provides pin
  const [x, setX] = useState(0);
  // provides deposit
  const [d, setD] = useState(0);
  // provides withdraw
  const [w, setW] = useState(0);
  // provides id
  const [yy, setYY] = useState(0);
  factory.createDataStore().setUIBalance = setA;
  m.setUIState = setState;
  return (
    <div className="account2-panel">
      <div className="header">
        <span className="header-item">Current State: {s.constructor.name}</span>
        <span className="header-item">Current Balance: {a}</span>
      </div>
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
        <Button onClick={() => account2.OPEN(p, y, a)}>OPEN</Button>
      </div>
      <div className="operation">
        <span>Login: </span>
        <Input value={yy} onChange={(e) => setYY(Number(e.target.value))}></Input>
        <Button onClick={() => account2.LOGIN(yy)}>LOGIN</Button>
      </div>
      <div className="operation">
        <span>Provides pin: </span>
        <Input value={x} onChange={(e) => setX(Number(e.target.value))}></Input>
        <Button onClick={() => account2.PIN(x)}>PIN</Button>
      </div>
      <div className="operation">
        <span>Deposite: </span>
        <Input value={d} onChange={(e) => setD(Number(e.target.value))}></Input>
        <Button onClick={() => account2.DEPOSIT(d)}>DEPOSIT</Button>
      </div>
      <div className="operation">
        <span>Withdraw: </span>
        <Input value={w} onChange={(e) => setW(Number(e.target.value))}></Input>
        <Button onClick={() => account2.WITHDRAW(w)}>WITHDRAW</Button>
      </div>
      <div className="operation">
        <Button onClick={() => account2.BALANCE()}>BALANCE</Button>
        <Button onClick={() => account2.LOGOUT()}>LOGOUT</Button>
      </div>
      <div className="operation">
        <Button onClick={() => account2.suspend()}>suspend</Button>
        <Button onClick={() => account2.activate()}>activate</Button>
        <Button onClick={() => account2.close()}>close</Button>
      </div>
    </div>
  );
}
