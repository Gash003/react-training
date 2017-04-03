import {combineReducers} from 'redux';
import {CREATE_COURSE} from './actions';

function courseReducer(state = [], action) {
    switch (action.type) {
        case CREATE_COURSE:
            return [
                ...state,
                Object.assign({}, action.course)
            ];
        default:
            return state;
    }
}

const combinedReduces = combineReducers({
    courses: courseReducer
});

export default combinedReduces;