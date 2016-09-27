// third party
import React from 'react';
import ReactDOM from 'react-dom';
import Col from 'react-bootstrap/lib/Col';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import $ from "jquery";
import RaisedButton from 'material-ui/RaisedButton';
// my liblary
import Menu from './menu.jsx'

// Index class is render index page
export default class Index extends React.Component {
  //constructor
  constructor(props) {
    super(props);
    self = this;

    $.ajax({
      type: "GET",
      url: "/todos",
      async: false
    }).done(function(data) {
      self.state = {
        todoList: data,
        todo: ''
      };
    });
  }

  // reload is reload state
  reload() {
    var self = this;
    $.ajax({
      type: "GET",
      url: "/todos"
    }).done(function(data) {
      self.setState({
        todoList: data,
        todo: ''
      })
    });
  }

  // add is add todo
  add(e) {
    var self = this;

    $.ajax({
      type: 'POST',
      url: "/todos",
      data: {name: this.state.todo}
    }).done(function(data) {
      self.reload();
    });
  }

  // del is delete todo
  del(e) {

  }

  // render
  render() {
    return (
      <div>
        <Menu />
        <div className="container">
          <MuiThemeProvider>
            <div>
              <TextField
                hintText="AddTodo"
                floatingLabelText="AddTodo"
                value={this.state.todo}
                onChange={(e)=>{this.setState({todo: e.target.value});}}
                style={{marginLeft: 700}}
              />
              <RaisedButton
                label="add"
                onClick={this.add.bind(this)}
                style={{margin: 12}}
              />
              <Col xs={11}>
                {this.state.todoList.map((todo, i) => (
                  <List key={i}>
                    <ListItem
                      primaryText={todo.name}
                      leftCheckbox={<Checkbox defaultChecked={todo.completed}/>} />
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

// render
ReactDOM.render(
  <Index />,
  document.getElementById('app')
);
