
import { gql } from 'apollo-boost'


export const GET_CONTACTS = gql`
  query {
    contacts {
      id
      email
      name
    }
  }
`

export const REMOVE_CONTACT = gql`
  mutation deleteContact($id: ID) {
    deleteContact(id: $id)
  }
`

export const UPDATE_CONTACT = gql`
  mutation updateContact($contact: InputContact ) {
    updateContact(contact: $contact) {
      id
      name
      email
    }
  }
`

export const ADD_CONTACT = gql`
  mutation addContact($contact: InputContact!) {
    addContact(contact: $contact) {
      id
      name
      email
    }
  }
`