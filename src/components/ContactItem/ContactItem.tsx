import React from 'react'
import { createStyles, Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import ListItem from '@material-ui/core/ListItem';

import RemoveItem from '../RemoveItem';
import Edit from '@material-ui/icons/Edit'
import { Link } from 'react-router-dom';

import './ContactItem.css'

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
  return (
    <ListItem key={props.id} className='wrapper'>
      <div className='name'>{props.name}</div>
      <RemoveItem
        id={props.id}
        onChange={() => props.onChange && props.onChange(props.id, ContactItemActionType.REMOVE)}
      />
      <Link to={`contacts/${props.id}/edit`} ><Edit /></Link>      
    </ListItem>
  )
}
