// third party
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

// style
const styles = {
  title: {
    color: 'white',
    textDecorationLine: 'none'
  }
};

// Menu class is menu componet
export default class Menu extends React.Component {
  // constructor
  constructor(props) {
    super(props);
  }

  // render menu
  render() {
    return (
      <MuiThemeProvider>
        <AppBar
          title={<a href="/" style={styles.title}>TODO LIST</a>}
          showMenuIconButton={false}
          style={{marginBottom: 30}}
          />
      </MuiThemeProvider>
    )
  }
}
