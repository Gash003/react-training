//Action Types
export const CREATE_COURSE = 'CREATE_COURSE';

//Action Creators
export {createCourse};

function createCourse(course) {
  return {
    type: CREATE_COURSE, course
  };
}

