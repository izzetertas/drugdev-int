import React from 'react'
import ListItem from '@material-ui/core/ListItem';

import RemoveContact from '../RemoveContact';
import Edit from '@material-ui/icons/Edit'
import { Link } from 'react-router-dom';

import './ContactItem.css'

export interface ContactItemProps {
  id: string,
  email: string,
  name: string,
}

export default function ContactItem(props: ContactItemProps){
  return (
    <ListItem className='wrapper' key={props.id}>
      <div className='input'>{props.name}</div>
      <div className='input'>{props.email}</div>
      <div className='buttons'>
        <RemoveContact id={props.id} />
        <Link to={`contacts/${props.id}/edit`} >
          <Edit />
        </Link>
      </div>      
    </ListItem>
  )
}
