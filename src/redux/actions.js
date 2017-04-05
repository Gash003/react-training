import authorAPI from '../api/mockAuthorApi';
import courseAPI from '../api/mockCourseApi';

//Action Types
export const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_SUCCESS';
export const UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS';
export const LOAD_AUTHORS_SUCCESS = 'LOAD_AUTHORS_SUCCESS';
export const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';

//Action Creators
export {loadAuthors, loadCourses, saveCourse};

function updateCourseSuccess(course) {
  return {
    type: UPDATE_COURSE_SUCCESS,
    course
  };
}

function createCourseSuccess(course) {
  return {
    type: CREATE_COURSE_SUCCESS,
    course
  };
}

function loadAuthorsSucess(authors) {
  return {
    type: LOAD_AUTHORS_SUCCESS,
    authors
  };
}

function loadCoursesSucess(courses) {
  return {
    type: LOAD_COURSES_SUCCESS,
    courses
  }
}

function loadAuthors() {
  return function(dispatch) {
    return authorAPI.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSucess(authors));
    }).catch(error => {
      throw(error);
    });
  }
}

function loadCourses() {
  return function(dispatch) {
    return courseAPI.getAllCourses().then(courses => {
      dispatch(loadCoursesSucess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

function saveCourse(course) {
  return function(dispatch, getState) {
    return courseAPI.saveCourse(course).then(savedCourse => {
      if(course.id) {
        dispatch(updateCourseSuccess(savedCourse));
      }
      else {
        dispatch(createCourseSuccess(savedCourse));
      }
    }).catch(error => {
      throw(error);
    });
  };
}

