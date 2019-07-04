import ContactEntryForm from './ContactEntryForm'
import { Input } from '@material-ui/core';
import React, { useState } from 'react'

describe('<ContactEntryForm />', () => {
  const minProps = {
    onSubmit: jest.fn()
  }
  const onSubmitMock = jest.fn()

  const props = {
    contactInfo: { id: 'sdfsdf£$sAS1', name: 'Izzet', email: 'izzet@gmail.com' },
    onSubmit: onSubmitMock
  }

  describe('when new record is entered', () => {
    
    const wrapper = shallow(<ContactEntryForm {...minProps} />)
    it('should render without exploding', () => {
      expect(snapshot(wrapper)).toMatchSnapshot()
    })

    it('should assign correct header', () => {
      expect(wrapper.find('h2').text()).toBe('Add New Contact')
    });
  });
    
  describe('when an update record is come', () => {
    const wrapper = shallow(<ContactEntryForm {...props}/>)

    it('should render without exploding', () => {
      expect(snapshot(wrapper)).toMatchSnapshot()
    })
    
    it('should assign correct header', () => {
      expect(wrapper.find('h2').text()).toBe('Update Contact')
    });

    it('should assign default value correctly', () => {
      const input = wrapper.find(Input).first()
      expect(input.prop('value')).toBe(props.contactInfo.name)
    });
  });

  describe('When name field is changed', () => {
    it('should change state correctly', () => {
      const wrapper = shallow(<ContactEntryForm {...minProps}/>)
      
      const input = wrapper.find(Input).first()
      expect(input.prop('value')).toBe('')
      const expected = 'Sude'
      input.simulate("change", { target: { value: expected } });
      expect(wrapper.state('name')).toBe(expected)
    });
  });

  describe('When email field is changed', () => {
    it('should change state correctly', () => {
      const wrapper = shallow(<ContactEntryForm {...minProps}/>)
      
      const input = wrapper.find(Input).at(1)
      expect(input.prop('value')).toBe('')
      expect(input.prop('id')).toBe('email')
      const expected = 'sude@gmail.com'
      input.simulate("change", { target: { value: expected } });
      expect(wrapper.state('email')).toBe(expected)
    });
  });

  describe('when form is submitted', () => {
    it('should invoke onSubmit prop with correct params', () => {
      const wrapper = shallow(<ContactEntryForm {...props}/>)
      const expected = {
        id: props.contactInfo.id,
        name: 'Sude',
        email: 'newEmail@gmail.com'        
      }
      
      const nameInput = wrapper.find(Input).first()
      nameInput.simulate("change", { target: { value: expected.name } });

      const emailInput = wrapper.find(Input).at(1)
      emailInput.simulate("change", { target: { value: expected.email } });

      wrapper.find('form').simulate('submit', { preventDefault: jest.fn() })
      expect(onSubmitMock).toHaveBeenCalledWith(expected)
    });
  });
});
