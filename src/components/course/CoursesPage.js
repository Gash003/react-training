import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as courseActions from '../../redux/actions';
import CourseList from './CourseList';

class CoursesPage extends Component {
  render() {
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={this.props.courses} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createCourse: course => dispatch(courseActions.createCourse(course))
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);