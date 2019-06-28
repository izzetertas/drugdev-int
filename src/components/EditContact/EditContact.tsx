import React from 'react'
import { Mutation, Query } from 'react-apollo'

import { GET_CONTACT, UPDATE_CONTACT } from '../queries';
import ContactEntryForm from '../ContactEntryForm/ContactEntryForm';

export interface EditContactProps {
  onSubmit: (isRecordAdded: boolean) => void,
  history: any,
  match: any,
}

export default function EditContact(props: EditContactProps) {

  return (
    <Query query={GET_CONTACT} variables={ { id: props.match.params.id }}>
      {
        ({ data, error, loading }) => {
          if (loading) return <div>Please wait...</div>
          if (error) return <div>Error: ${error}</div>

          return (
            <Mutation mutation={UPDATE_CONTACT}>
              {updateTo => (
                <ContactEntryForm
                  contactInfo={data.contact}
                  onSubmit={(contact: any) => {
                    if (contact) updateTo({ variables: { contact } })
                    props.history.push('/')
                  }
                  }
                />
              )}
            </Mutation>
          )
        }
      }
    </Query>
  )
}
