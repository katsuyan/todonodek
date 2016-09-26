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
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import $ from "jquery";
import RaisedButton from 'material-ui/RaisedButton';
export default class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todoList: [{name: "aaa"},{name: "aaa"},{name: "aaa"},{name: "aaa"},{name: "aaa"},{name: "aaa"},{name: "aaa"},{name: "aaa"},{name: "aaa"},{name: "aaa"},{name: "aaa"}]
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


                <TextField
                  hintText="AddTodo"
                  floatingLabelText="AddTodo"
                  value={this.state.todo}
                  onChange={(e)=>{this.setState({todo: e.target.value});}}
                  style={{marginLeft: 700}}
                />
              <RaisedButton label="add" style={{margin: 12}}/>

              <Col xs={11}>
                {this.state.todoList.map((todo, i) => (
                  <List key={i}>
                    <ListItem
                      primaryText={todo.name}
                      leftCheckbox={<Checkbox />} />
                    <Divider />
                  </List>
                ))}
              </Col>
              <Col xs={1}>
              {this.state.todoList.map((todo, i) => (
                <IconButton
                  key={i}
                  style={{marginTop: 21}}
                  tooltip="Delete"
                  touch={true}
                  tooltipPosition="bottom-right"
                  >
                  <NavigationClose />
                </IconButton>
                ))}
              </Col>
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
