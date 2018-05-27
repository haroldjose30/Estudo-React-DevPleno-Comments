import React from 'react';
import App from './App';

import { shallow, mount } from 'enzyme'

describe('<App />',()=> {

  const base =  {
    syncState: jest.fn()
  }

  it('renders without crashing', () => {
    const wrapper = shallow(<App base={base}/>)
    expect(wrapper.length).toBe(1)
  });

  it('should have .container class', ()=>{
    const wrapper = shallow(<App base={base}/>)
    expect(wrapper.is('.container')).toBe(true)
  })

  it('show Comments',()=>{
    const wrapper = shallow(<App base={base}/>)
    expect(wrapper.find('Comments').length).toBe(1)
  })

  it('show NewComment',()=>{
    const wrapper = shallow(<App base={base}/>)
    expect(wrapper.find('NewComment').length).toBe(1)
  })

  it('add New Comment with postNewComment',()=>{
    const wrapper = mount(<App base={base}/>)
    wrapper.instance().postNewComment({comment:'test'})
    wrapper.instance().postNewComment({comment:'test'})
    wrapper.instance().postNewComment({comment:'test'})
    //console.log(wrapper.instance().state);
    const comments = Object.keys(wrapper.instance().state.comments)
    expect(comments.length).toBe(3)
  })

})


