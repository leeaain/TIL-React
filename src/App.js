// 체크박스 버튼 상태를 업뎃하는 코드 2가지.
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function CheckBox1() {
  const [isChecked, setIsChecked] = useState(false);

  const CheckHandler = function() {
    console.log(isChecked)
    setIsChecked(!isChecked); // 이 부분이 다름
  }

  return (
    <div className="App">
      {/* 아래 구문이 다름 */}
      <input type="checkbox" onChange={CheckHandler} />
      {/* ------------ */}
      <span>
        {isChecked ? "Yes, it's checked!" : "No, it's not checked."}
      </span>
    </div>
  );
}


// 위와 동일하나 좀 더 간단.
function CheckBox() {
  const [isChecked, setIsChecked] = useState(false);

  const CheckHandler = function(event) {
    console.log(event.target.checked)
    setIsChecked(event.target.checked); // 이 부분이 다름
  }

  return (
    <div className="App">
      {/* 아래 구문이 다름 */}
      <input type="checkbox" checked={isChecked} onChange={CheckHandler} />
      {/* ------------ */}
      <span>
        {isChecked ? "Yes! it's checked!" : "No! it's not checked."}
      </span>
    </div>
  );
}

export default CheckBox;