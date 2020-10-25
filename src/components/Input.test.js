import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Input from './Input';
Enzyme.configure({adapter:new EnzymeAdapter()});
import {checkProps} from './testUtils'


const setup=(secretWord='party')=>{
  const wrapper= shallow(<Input secretWord={secretWord} />)

  return wrapper;

}

const findByTestAttr=(wrapper,val)=>{

  return wrapper.find(`[data-test="${val}"]`);
}

test('renders without crashing', () => {

  const wrapper=setup();
  const inputComponent=findByTestAttr(wrapper,'input-component');
  expect(inputComponent.length).toBe(1); 
});

test('not throw warning with expected Props', () => {
     checkProps(Input,{secretWord:"party"});
});


describe('state controlled input field',()=>{

let wrapper;
let mockSetCurrentGuess=jest.fn();;

beforeEach(()=>{

     mockSetCurrentGuess.mockClear();
    React.useState=jest.fn(()=>["",mockSetCurrentGuess]);
     wrapper=setup();

})

test('state updates with value of input box upon change',()=>{
 
  
     const inputBox=findByTestAttr(wrapper,'input-box')
    
     const mockEvent={target:{value:'train'}};
     inputBox.simulate("change",mockEvent);

     expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');

    })

test('field is cleared upon submit button click',()=>{


     const submitButton=findByTestAttr(wrapper,'submit-button')
    
     
     submitButton.simulate('click',{ preventDefault(){}});

     expect(mockSetCurrentGuess).toHaveBeenCalledWith("");

    })
}
)