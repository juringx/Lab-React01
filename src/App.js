import React from 'react';
import './App.css';
import WordCard from './WordCard';
import CharacterCard from './CharacterCard';


const word1 = "Hello";
const word2 = "Teacher";
const word3 = "Statue";

function _refreshPage() {
  window.location.reload();
}
function Apps() {
  
  return (
    <div>
      <a>Guess WORD !</a>
      <p>1. The word u use when greet other</p>
      <div><WordCard value={word1}/></div>
      <p>2. The word u call someone who u learn anything from</p>
      <div><WordCard value={word2}/></div>
      <p>3. a model that looks like a person or animal</p>
      <div><WordCard value={word3}/></div>
      <button onClick = {_refreshPage}> Restart </button>
    </div>
  );
}

export default Apps;

