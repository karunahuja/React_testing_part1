import React, { Component, useState } from 'react';



import hookActions from '../actions/hookActions'
import Input from './Input'

function reducer(state, action) {
    switch(action.type) {
      case "setSecretWord":
        return { ...state, secretWord: action.payload };
      case "setLanguage":
        return { ...state, language: action.payload };
      default:
        throw new Error(`Invalid action type: ${action.type}`);
    }
  
  }

function App() {
    const [state,dispatch] = React.useReducer(

        reducer,
        {secretWord:null}

    );


const setSecretWord=(secretWord)=>
    dispatch({type:"setSecretWord",payLoad:secretWord});



React.useEffect(
        () => { hookActions.getSecretWord(setSecretWord) },
        []
)

    if(!state.secretWord) {
        return (
          <div className="container" data-test="spinner">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <p>Loading secret word</p>
          </div>
        );
      }
    
      return (
        <div className="container" data-test="component-app">
          <h1>Jotto</h1>
          {/* <languageContext.Provider value={state.language}>
            <LanguagePicker setLanguage={setLanguage} />
            <guessedWordsContext.GuessedWordsProvider>
              <successContext.SuccessProvider> */}
                {/* <Congrats /> */}
                <Input secretWord={state.secretWord} />
              {/* </successContext.SuccessProvider>
              <GuessedWords />
            </guessedWordsContext.GuessedWordsProvider>
          </languageContext.Provider> */}
        </div>
      );

}
export default App;