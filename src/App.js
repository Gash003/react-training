import React, { Component, PropTypes } from 'react';
import './App.css';
import Header from './components/common/Header';

class App extends Component {
  render() {
    return (
      <div className="container-fluid" >
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
