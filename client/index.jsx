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
    this.state = {
      todoList: [],
      todo: ''
    }

    this.load();
  }

  // load is load state
  load() {
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
      self.load();
    });
  }

  // del is delete todo
  del(e) {
    var self = this;
    var url = "/todos/" + e.currentTarget.id

    $.ajax({
      type: 'DELETE',
      url: url,
    }).done(function(data) {
      self.load();
    });
  }

  // chagneComp is to change completed
  changeComp(e) {
    var self = this;
    var id = parseInt(e.currentTarget.id);
    var changeTodo = this.state.todoList[id];
    var url = "/todos/" + changeTodo._id;

    $.ajax({
      type: 'PUT',
      url: url,
      data: {
        name: changeTodo.name,
        completed: !changeTodo.completed
      }
    }).done(function(data) {
      self.load();
    });
  }

  // render
  render() {
    return (
      <div>
        <Menu />
        <div className="container">
          <MuiThemeProvider>
            <div>

              <Col xs={10} sm={11}>
                {this.state.todoList.map((todo, i) => (
                  <List key={i}>
                    <ListItem
                      primaryText={todo.name}
                      leftCheckbox={<Checkbox
                                      defaultChecked={todo.completed}
                                      id={i}
                                      onClick={this.changeComp.bind(this)}/>}
                      />
                    <Divider />
                  </List>
                ))}
              </Col>
              <Col xs={2} sm={1}>
              {this.state.todoList.map((todo, i) => (
                <IconButton
                  key={i}
                  style={{marginTop: 21}}
                  tooltip="Delete"
                  touch={true}
                  tooltipPosition="bottom-right"
                  id={todo._id}
                  onClick={this.del.bind(this)}
                  >
                  <NavigationClose />
                </IconButton>
                ))}
              </Col>
              <TextField
                hintText="AddTodo"
                floatingLabelText="AddTodo"
                value={this.state.todo}
                onChange={(e)=>{this.setState({todo: e.target.value});}}
                style={{marginLeft: 20}}
              />
              <RaisedButton
                label="add"
                onClick={this.add.bind(this)}
                style={{margin: 12, marginLeft: 20}}
              />
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
