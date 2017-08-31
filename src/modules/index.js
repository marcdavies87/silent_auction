import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import io from 'socket.io-client';
import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import socketio from 'feathers-socketio/client';
import authentication from 'feathers-authentication-client';
import rest from 'feathers-rest/client';
import superagent from 'superagent';

import somethingSaga from './user/sagas';

export const rootReducer = combineReducers({
  bob: (state=[]) => state,
});
//const rootReducer = combineReducers({ routing: routerReducer });

export default function* rootSaga() {
  yield [
  ];
}
//export default rootReducer;
const host = 'http://localhost:3030/'
const socket = io(host);

const socketioApp = feathers()
  .configure(socketio(socket))
  .configure(hooks());

  const restapp = feathers()
    .configure(rest(host).superagent(superagent))
    .configure(hooks())
    .configure(authentication({ storage: window.localStorage }));
