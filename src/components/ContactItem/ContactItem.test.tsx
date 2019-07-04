import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import RemoveContact from '../RemoveContact';
import Edit from '@material-ui/icons/Edit'
import { Link } from 'react-router-dom';
import ContactItem from './ContactItem';

describe('<ContactItem />', () => {
  const props = {
    id: 'Asd21asdAGDe',
    email: 'test@mail.com',
    name: 'test',
  }
  let wrapper: any = null
  beforeAll(() => {
    wrapper = shallow(<ContactItem {...props} />);
  })

  it('should render without exploding', () => {
    expect(snapshot(wrapper)).toMatchSnapshot()
  })


  it('should render a ListItem', () => {
    expect(wrapper.find(ListItem)).toHaveLength(1);
  });

  it('should render a RemoveContact', () => {
    const item = wrapper.find(RemoveContact)
    expect(item).toHaveLength(1);
    expect(item.prop('id')).toBe(props.id);
  });

  it('should render a Edit', () => {
    expect(wrapper.find(Edit)).toHaveLength(1);
  });

  it('should render divs correctly', () => {
    expect(wrapper.find('div').first().text()).toBe(props.name);
    expect(wrapper.find('div').at(1).text()).toBe(props.email);
  });
  
  it('should render Link correctly', () => {
    const link = wrapper.find(Link)
    expect(link).toHaveLength(1);
    expect(link.prop('to')).toBe(`contacts/${props.id}/edit`)
  });
});
