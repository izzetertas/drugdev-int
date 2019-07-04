import React, { useState } from 'react'
import uuid from 'uuid/v4'
import get from 'lodash/get'
import Button from '@material-ui/core/Button';
import { FormControl, Input, InputLabel } from '@material-ui/core';

import './ContactEntryForm.css'

export interface ContactInfo {
  id: string,
  name: string,
  email: string
}

export interface ContactEntryFormProps {
  contactInfo?: ContactInfo,
  onSubmit: (contactInfo: ContactInfo | null) => void,
}

export default class ContactEntryForm extends React.Component<ContactEntryFormProps> {
  state = {
    email: get(this.props, 'contactInfo.email', ''),
    name: get(this.props, 'contactInfo.name', '')
  }

  render() {
    return (
      <div className='contactEntryWrapper'>
        <div className='contactEntryHeader'>
          <h2>{get(this.props, 'contactInfo.id') ? 'Update ' : 'Add New '}Contact</h2>
        </div>
        <div className='contactEntryContainer'>
          <form
            onSubmit={e => {
              e.preventDefault();
              this.props.onSubmit({
                id: get(this.props, 'contactInfo.id', uuid()),
                name: this.state.name,
                email: this.state.email
              })
            }}
          >
            <div className='formItem'>
              <FormControl>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input
                  id="name"
                  aria-describedby="name"
                  onChange={(e) => { console.log(e.target.value); this.setState({ name: e.target.value}) }}
                  value={this.state.name}
                />
              </FormControl>
            </div>
            <div>
              <FormControl>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <Input
                  id="email"
                  aria-describedby="email"
                  onChange={(e) => this.setState({email: e.target.value})}
                  value={this.state.email}
                />
              </FormControl>
            </div>
            <div className='buttonContainer'>
              <Button type='submit'
                variant="contained"
                color="primary"
                className='button'
              >
                {get(this.props, 'contactInfo.id') ? 'Update' : 'Add'}
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className='button'
                onClick={() => this.props.onSubmit(null)}
              >
                Cancel
          </Button>
            </div>
          </form>
        </div>
      </div >
    )
  }
}
