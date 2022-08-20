import React, { useState, useRef } from 'react';
import './App.css';
import WordCard from './WordCard';
import CharacterCard from './CharacterCard';

const word1 = "Hello";
const word2 = "Teacher";
const word3 = "Statue"
function App() {
  return (
    <div>
      <div>1. The word u use when greet other</div>
      <div><WordCard value={word1}/></div>
      <div>2. The word u call someone who u learn anything from</div>
      <div><WordCard value={word2}/></div>
      <div>3. a model that looks like a person or animal</div>
      <div><WordCard value={word3}/></div>
    </div>
  );
}

export default App;
