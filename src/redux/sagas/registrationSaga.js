import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* registerUser(action) {
  console.log(action.payload)
  try {
    // clear any existing error on the registration page
    yield put({ type: 'CLEAR_REGISTRATION_ERROR' });

    // passes the username and password from the payload to the server
    yield axios.post('/api/user/register', action.payload);
    console.log(action.payload)

    // dispatches to createSaga to POST new member
    yield put({ type: 'ADD_MEMBER', payload: action.payload});

    // automatically log a user in after registration
    yield put({ type: 'REGLOGIN', payload: action.payload });
    
    // set to 'login' mode so they see the login screen
    // after registration or after they log out
    yield put({type: 'SET_TO_LOGIN_MODE'});
  } catch (error) {
      console.log('Error with user registration:', error);
      yield put({type: 'REGISTRATION_FAILED'});
  }
}
function* saveRegister(action){
  yield put({type: 'SAVE_USER', payload:action.payload})
}
function* newId(){
  const response = yield axios.get('/api/user/new');
  yield put({type:'GET_USERS_REDUCER', payload:response.data});
}
function* resetNewId(){
  yield put({type:'RESET_USERS_REDUCER'})
}
function* registrationSaga() {
  yield takeLatest('REGISTER', registerUser);
  yield takeLatest('SAVE_REGISTER', saveRegister);
  yield takeLatest('NEW_ID',newId);
  yield takeLatest('RESET_NEW_ID',resetNewId);
}

export default registrationSaga;
