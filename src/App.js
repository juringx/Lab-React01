import React, {useState} from 'react';
import './App.css';
import WordCard from './WordCard';
import Popup from "./Rules";


const word = ["Hello","Teacher","Statue","Barista"];


function _refreshPage() {
  window.location.reload();
}
function Apps() {
  const [isOpen, setIsOpen] = useState(false);
  
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

    return (
    <div>
      <button onClick={togglePopup}>Click to Open Rules</button>
      {isOpen && <Popup
        handleClose={togglePopup}
        content={<div>
          <h2>RULES</h2>
          <p>1. จะมีคำศัพท์ให้มาพร้อมความหมายและตัวอักษร</p>
          <p>2. กดเลือกตัวอักษรเรียงตามลำดับให้ตรงตามความหมาย</p>
          <p>3. หากเรียงผิดจะต้องเรียงใหม่</p>
          <p>4. เมื่อเล่นครบหมดสามารถกดเริ่มใหม่ได้</p>
        </div>
        }
      />}

      <p>1. The word u use when greet other</p>
      <div><WordCard value={word[0]}/></div>
      <p>2. The word u call someone who u learn anything from</p>
      <div><WordCard value={word[1]}/></div>
      <p>3. a model that looks like a person or animal</p>
      <div><WordCard value={word[2]}/></div>
      <p>4. a person who serves customers in a coffee shop</p>
      <div><WordCard value={word[3]}/></div>
      <button className="Restart_button" onClick = {_refreshPage}> Restart </button>
    </div>
  );
}

export default Apps;

