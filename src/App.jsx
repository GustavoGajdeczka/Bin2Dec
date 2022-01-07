import React, {useEffect, useState} from 'react';
import Input from './components/input';
import Display from './components/display';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  const [inputBin, setInputBin] = useState({
    value: '',
    binary: false
  })
  const [decNum, setDecNum] = useState()
  const regex = /[^01]/

  useEffect(() => {
    if(inputBin.value.length > 0 && inputBin.binary){
      setDecNum(ConvertToDecimal(inputBin.value))
    }else if(inputBin.value.length === 0 ){
      setDecNum('')
    }
  }, [inputBin])

  const BinaryInput = (i) => {
    const {value} = i.target
    setInputBin({value, binary: !regex.test(value)})
  }
  const ConvertToDecimal = (num) => {
    let convertedNum = 0
    num.split('').reverse().map((item, index) => {
      return item === '1' && (convertedNum += Math.pow(2, index))
    })
    return convertedNum
  }

  return (
    <div>
      <div className="App">
        <h1>Bin2Dec</h1>
        <Input inputBin={inputBin} handleBinaryInput={BinaryInput}/>
        <Display inputBin={inputBin} decNum={decNum}/>
      </div>
    </div>
  );
}

export default App;
