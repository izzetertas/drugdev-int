import React from 'react'
import { Mutation } from 'react-apollo'

import { ADD_CONTACT } from '../queries';
import ContactEntryForm from '../ContactEntryForm/ContactEntryForm';

export interface AddContactProps {
  onSubmit: (isRecordAdded: boolean) => void,
  history: any,
}

export default function AddContact(props: AddContactProps) {
  
  return (
    <Mutation
      mutation={ADD_CONTACT}
    >
      {addTodo => (
        <ContactEntryForm
          onSubmit={(contact: any) => {
            if (contact) addTodo({ variables: { contact } })
            props.history.push('/')
          }
          }
        />
      )}
    </Mutation>
  )
}
