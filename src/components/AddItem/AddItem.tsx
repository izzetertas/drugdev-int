import React, { Fragment, useState } from 'react'
import { Mutation } from 'react-apollo'
import uuid from 'uuid/v4'

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import { GET_CONTACTS, ADD_CONTACT } from '../queries';

export interface AddItemProps {
  onChange?: () => any,
}

export default function AddItem(props: AddItemProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  return (
    <Fragment>
      <Mutation
        mutation={ADD_CONTACT}
        refetchQueries={[{ query: GET_CONTACTS }]}
      >
        {addTodo => (
          <Dialog open aria-labelledby="simple-dialog-title">
            <DialogTitle id="simple-dialog-title">Add new Contact</DialogTitle>
            <div>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  addTodo({
                    variables: {
                      contact: {
                        id: uuid(),
                        name,
                        email
                      }
                    }
                  });
                }}
              >
                <input onChange={(e) => setName(e.target.value)} />
                <input onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Add Todo</button>
              </form>
            </div>
          </Dialog>
        )}
      </Mutation>
    </Fragment>
  )
}
