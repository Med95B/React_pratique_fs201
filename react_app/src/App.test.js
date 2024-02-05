//import { render, screen } from '@testing-library/react';

import App from './App';
import React from 'react';
import Enzyme,{shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


Enzyme.configure({Adapter:new Adapter()})

describe('Test Case For App',()=>{
    it('should render button',()=>{
          const wrapper=shallow(<App/>)
          const buttonElement=wrapper.find('#ClickMe')
          expect(buttonElement).toHaveLength(1)
          expect(buttonElement.text()).toEqual('Click Me')
    })
})

/*

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

*/