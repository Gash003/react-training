import React, {Component} from 'react';
import {Link} from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight administration</h1>
        <p>React, Redux and React Router in ES6 for web apps.</p>
        <Link to="about" className="btn bt-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;