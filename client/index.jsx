import React from 'react';
import { render } from 'react-dom';
import Col from 'react-bootstrap/lib/Col';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Menu from './menu.jsx'
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export default class Index extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        aaa
      </div>
    )
  }
}

React.render(
  <Index />,
  document.getElementById('app')
);
