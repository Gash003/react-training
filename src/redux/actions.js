import courseAPI from '../api/mockCourseApi';

//Action Types
export const CREATE_COURSE = 'CREATE_COURSE';
export const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';

//Action Creators
export {createCourse, loadCourses};

function createCourse(course) {
  return {
    type: CREATE_COURSE, course
  };
}

function loadCoursesSucess(courses) {
  return {
    type: LOAD_COURSES_SUCCESS,
    courses
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

