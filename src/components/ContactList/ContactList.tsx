import React from 'react'
import { Query } from 'react-apollo'

import { createStyles, Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

import List from '@material-ui/core/List';


import { Contact } from '../../interface'
import ContactItem from '../ContactItem/ContactItem';
import { GET_CONTACTS } from '../queries';
import { Button } from '@material-ui/core';
import AddItem from '../AddItem';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto',
      marginTop: 20,
      width: '100%',
      justifyItems: 'center',
      alignItems: 'center'
    },
    listItem: {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      width: '100%',
      maxWidth: 360,
      border: 1,
      backgroundColor: 'yellow',
      height: 48,
      padding: '0 30px',
      margin: '4px'
      // backgroundColor: theme.palette.background.paper,
    },
    addButton: {
      margin: 8,
      width: 180,
    },
  }),
);


const ContactList = () => {
  const classes = useStyles();
  return (
    <Query query={GET_CONTACTS}>
      {({ data, loading, refetch }) => {
        if (loading) return <div>loading</div>
        if (!data.contacts) return <div>No Contact on the list</div>
        return (
          <div className={classes.root}>
            <h1>Contacts</h1>
            <Button variant="contained" size="small" color="primary" className={classes.addButton}>
              + Add New Contact
            </Button>
            {/* <AddItem onChange={() => refetch()} /> */}
            <List component="nav" aria-label="Main mailbox folders">
              {
                data.contacts.map((item: Contact, index: number) => (
                  <ContactItem {...item} key={index} />
                ))
              }
            </List>
          </div>
        )
      }}
    </Query>
  )
}

export default ContactList
