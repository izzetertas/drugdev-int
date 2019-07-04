import React from 'react'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'
import { shallow, mount } from 'enzyme';

configure({ adapter: new Adapter() });

global.React = React;
global.mount = mount;
global.snapshot = toJson;
global.shallow = shallow;
