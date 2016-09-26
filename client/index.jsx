import React from 'react';
import ReactDOM from 'react-dom';
import Col from 'react-bootstrap/lib/Col';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Menu from './menu.jsx'
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Checkbox from 'material-ui/Checkbox';
import $ from "jquery";

export default class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todoList: [{name: "aaa"}]
    };
  }

  render() {
    return (
      <div>
        <Menu />
        <div className="container">
          <MuiThemeProvider>
            <div>
              <h1>TODO LIST</h1>
                {this.state.todoList.map((todo, i) => (
                  <List key={i}>
                    <ListItem
                      primaryText={todo.name}
                      leftCheckbox={<Checkbox />}
                      rightIconButton={<ContentInbox /> } />
                    <Divider />
                  </List>
                ))}
            </div>
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('app')
);
