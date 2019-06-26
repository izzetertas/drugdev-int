import React, { Fragment } from 'react'
import { Mutation } from 'react-apollo'

import DeleteIcon from '@material-ui/icons/Delete';
import { REMOVE_CONTACT, GET_CONTACTS } from '../queries';


export interface RemoveItemProps {
  id: string,
  onChange: () => any,
}

export default function RemoveItem(props: RemoveItemProps) {
  return (
    <Fragment>
      <Mutation
        mutation={REMOVE_CONTACT}
        variables={{ id: props.id }}
        refetchQueries={[{ query: GET_CONTACTS }]}
      >
        {(removeContact: any) =>
          <DeleteIcon onClick={removeContact} />
        }
      </Mutation>
    </Fragment>
  )
}
