import React from 'react'
import { Query } from 'react-apollo'


import { Link } from 'react-router-dom'
import { createStyles, Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

import List from '@material-ui/core/List';

import ContactItem from '../ContactItem/ContactItem';
import { GET_CONTACTS } from '../queries';
import { Button } from '@material-ui/core';

import "./ContactList.css";

interface Contact {
  id: string,
  name: string;
  email: string
  history?: any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    addButton: {
      margin: 8,
      width: 180,
    },
  }),
);

const ContactList = () => {
  const classes = useStyles();

  return (
    <Query query={GET_CONTACTS} fetchPolicy='cache-and-network'>
      {({ data, loading }) => {
        if (loading) return <div>loading</div>
        if (!data.contacts) return <div>No Contact on the list</div>
        return (
          <div className='contactListWrapper'>
            <div className='contactListHeader'>
              <h2>Contacts</h2>
            </div>
            <div className='contactListContainer'>
              <Link to='/contacts/new'>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  className={classes.addButton}
                >
                  + Add New Contact
              </Button>
              </Link>
              <List aria-label="Contact List">
                {
                  data.contacts.map((item: Contact, index: number) => (
                    <ContactItem {...item} key={index} />
                  ))
                }
              </List>
            </div>
          </div>
        )
      }}
    </Query>
  )
}

export default ContactList
