import React from 'react'
import { createStyles, Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import ListItem from '@material-ui/core/ListItem';

import RemoveItem from '../RemoveItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
    },
    name: {
      width: 200,
    },
  }),
);

export enum ContactItemActionType {
  REMOVE = 'remove',
  EDIT = 'edit'
}

export interface ContactItemProps {
  id: string,
  email: string,
  name: string,
  onChange?: (id: string, action: ContactItemActionType) => void // { id: string, action: ContactItemActionType },
}

export default function ContactItem(props: ContactItemProps){
  const classes = useStyles();
  return (
    <ListItem key={props.id} className={classes.wrapper}>
      <div className={classes.name}>{props.name}</div>
      <RemoveItem
        id={props.id}
        onChange={() => props.onChange && props.onChange(props.id, ContactItemActionType.REMOVE)}
      />
    </ListItem>
  )
}
