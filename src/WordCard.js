import React, { useState } from 'react';
import CharacterCard  from './CharacterCard';
import _ from 'lodash';


const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false,
        Result: ''
    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))
    const activationHandler = (c) => {
        console.log(`${c} has been activated.`)
                
        let guess = state.guess + c
        setState({...state, guess})
        
        console.log(guess)

        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('yeah!')
                setState({...state, guess: state.word, completed: true, Result: "Correct !"})
            }else{
                console.log('reset, next attempt')
                setState({...state, guess: '', attempt: state.attempt + 1, Result: "Wrong Try Again"})
            }
        }
        
    }

    return (
        <div>
            <div>= {state.guess}</div>
            { state.chars.map((c, i) => 
                <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>) }
            
            <div>Attempt : {state.attempt}</div>
            <div>Result : {state.Result}</div> 
        </div>
    );
}
