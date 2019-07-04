import React, { Fragment } from 'react'
import { Mutation } from 'react-apollo'

import DeleteIcon from '@material-ui/icons/Delete';
import { REMOVE_CONTACT, GET_CONTACTS } from '../queries';

import './RemoveContact.css'

export interface RemoveContactProps {
  id: string,
}

export default function RemoveContact(props: RemoveContactProps) {
  return (
    <Mutation
      mutation={REMOVE_CONTACT}
      variables={{ id: props.id }}
      refetchQueries={[{ query: GET_CONTACTS }]}
    >
      {(removeContact: any) =>
        <DeleteIcon className='link' onClick={removeContact} />
      }
    </Mutation>
  )
}
