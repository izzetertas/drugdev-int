import React, { useState } from 'react'
import uuid from 'uuid/v4'
import get from 'lodash/get'
import Button from '@material-ui/core/Button';
import { FormControl, Input, InputLabel, Theme, Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';

export interface ContactInfo {
  id: string,
  name: string,
  email: string
}

export interface ContactEntryFormProps {
  contactInfo?: ContactInfo,
  onSubmit: (contactInfo: ContactInfo | null) => void,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: '4px !important'
    }
  }),
);


export default function ContactEntryForm(props: ContactEntryFormProps) {
  const classes = useStyles();
  const [email, setEmail] = useState(get(props, 'contactInfo.email', ''))
  const [name, setName] = useState(get(props, 'contactInfo.name', ''))

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.onSubmit({
            id: get(props, 'contactInfo.id', uuid()),
            name,
            email
          })
        }}
      >
        <div>
          <FormControl>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              aria-describedby="name"
              onChange={(e) => setName(e.target.value)}
              defaultValue={name}
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input
              id="email"
              aria-describedby="email"
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={email}
            />
          </FormControl>
        </div>
        <div>
          <Button type='submit'
            variant="contained"
            color="primary"
            className={classes.button}
          >
            {get(props, 'contactInfo.id') ? 'Update' : 'Add'}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => props.onSubmit(null)}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div >
  )
}
