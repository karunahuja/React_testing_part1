import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import React from 'react'
import GuessedWords from './GuessedWords'
import { checkProps, findByTestAttr } from './testUtils'



Enzyme.configure({adapter:new EnzymeAdapter()});

const defaultProps = {
 

        guessedWords:[{guessedWord:'train',letterMatchCount:3}],

} 

const setup=(props={})=>{

    const setupProps ={...defaultProps,...props}
    return shallow(<GuessedWords {...setupProps}/>)
}


test('does not throw warning with expected props',()=>{

checkProps(GuessedWords,defaultProps);
    
})


describe('if there are no words guessed',()=>{
let wrapper;
beforeEach(()=>
{
wrapper=setup({guessedWords:[]});
})

test('renders without error',()=>{
    const component=findByTestAttr(wrapper,'component-guessed-words');
    expect(component.length).toBe(1);
});
test('renders instructions to Guess a word',()=>{

    const instructions=findByTestAttr(wrapper,'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
})
    
})


test('if there are words guessed',()=>{

checkProps(GuessedWords,defaultProps);
    
})




describe('if there are there words guessed',()=>{

    
 const guessedWords=[
        {guessedWord:'train',letterMatchCount:3},
        {guessedWord:'agile',letterMatchCount:1},
        {guessedWord:'party',letterMatchCount:5},
    ];

let wrapper;
beforeEach(()=>
{
wrapper=setup({guessedWords:[]});
})

test('renders without error',()=>{
    const component=findByTestAttr(wrapper,'component-guessed-words');
    expect(component.length).toBe(1);
});


test('renders "guessed words" section',()=>{

    const component=findByTestAttr(wrapper,'guessed-words');
    expect(component.length).toBe(1);
});

test('correct number of guessed words',()=>{
    const guessesWordsNodes=findByTestAttr(wrapper,'guessed-word');
    expect(guessesWordsNodes.length).toBe(guessedWords.length);
})
    
})