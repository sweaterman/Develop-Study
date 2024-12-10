import React, { useState } from 'react';
import './App.css';
import Store from './Store';
import {Restaurant,Address} from "./model/restaurant"
import BestMenu from './BestMenu';


let data:Restaurant = {
  name: '식당1',
  category: 'western',
  address: {
    city: 'seoul',
    detail: 'somewhere',
    zipCode: 23423
  },
  menu: [
    {
      name: 'rose pasta',
      price: 2000,
      category: 'PASTA'
    },
    {
      name: 'garlic steak',
      price: 30000,
      category: 'STEAK'
    }
  ]
}

// 타입스크립트는 매개변수와 리턴에 있어서 타입을 다 지정해줘야한다,
// ex) <div> 태그처럼 컴포넌트를 리턴할 때는 => "React.FC"
const App:React.FC = () => {
  const [myrest, setMyrest] = useState<Restaurant>(data)
  const changeAddress = (someAddress:Address) => {
    setMyrest({...myrest, address:someAddress})
  }
  const showBestMenuName = (name:string) => {
    return name
  }
  
  return (
    <div className="App">
      <Store info={myrest} changeAddress={changeAddress}/>
      <BestMenu name="불고기피자" category="피자" price={1000} showBestMenuName={showBestMenuName}/>
    </div>
  );
}

export default App;
