import { takeEvery, put } from 'redux-saga/effects'

function* workerSaga() {
    console.log('Hey from worker')
    yield put({ type: 'ACTION_FROM_WORKER' })
}

// watchersaga
function* rootSaga() {
    yield takeEvery("HELLO", workerSaga) //wont work unless we dispatch the 'HELLO' action
}

export default rootSaga;


/*
 1.
 watcher_saga -> listesns to an action -> invokes the worker saga

 2. effects

 redux saga provide us some helpers(js objects)
 known as effects,
they just simply convey a specific meaning to redux-saga


by themseleves these objects are doing nothing,they are
simply returning a object and then this obejct
is passed back to the middleware,it then accordingly acts
upon them.

2.a) takeEvery
it listens to a particular action,whenever that action is dispatched and
then watcher saga comes into play

2.b) put
used to dispatch some action from worker saga

3. how redux saga manages promises?

redux saga pauses itself whenver they counter a promise,
until the promise completes itself.

*/