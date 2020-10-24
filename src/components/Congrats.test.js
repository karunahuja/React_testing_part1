import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import React from 'react'
import Congrats from './Congrats'
import { checkProps, findByTestAttr } from './testUtils'


Enzyme.configure({adapter:new EnzymeAdapter()});

const defaultProps = {success:false }

const setup=(props={})=>{

    const setupProps ={...defaultProps,...props}
    return shallow(<Congrats {...setupProps}/>)
}


test('renders without errors',()=>{
  
const wrapper=setup();
const component=findByTestAttr(wrapper,'component-congrats');
expect(component.length).toBe(1);
 
})


test('renders no text when success prop false',()=>{

const wrapper=setup({success:false});
const component=findByTestAttr(wrapper,'component-congrats');
expect(component.text()).toBe('');
    
})


test('renders congrats message when success prop is true',()=>{

    const wrapper=setup({success:true});
    const component=findByTestAttr(wrapper,'component-congrats');
    expect(component.text().length).not.toBe(0);

    
})

test('does not throw warning with expected props',()=>{

    const expectedProps={success:false}
checkProps(Congrats,expectedProps);


})