import { take, call } from 'redux-saga/effects'

import { IMAGES } from '../constants'

// workersaga
function* handleImagesLoad() {
    console.log("loading images....")
}

function* handleDang() {
    console.log('DANG!!')
}

// watchersaga
function* rootSaga() {
    yield take(IMAGES.LOAD)
    yield call(handleImagesLoad)
    yield take('DANG')
    yield call(handleDang)

}

export default rootSaga;


/*
 1.
 watcher_saga -> listesns to an action -> invokes the worker saga

 2. effects (blocking [runs in sequential thread] and non blocking[can run in parallel])

 redux saga provide us some helpers(js objects)
 known as effects,
they just simply convey a specific meaning to redux-saga


by themseleves these objects are doing nothing,they are
simply returning a object and then this obejct
is passed back to the middleware,it then accordingly acts
upon them.

2.a) takeEvery (non-blocking)
it listens to a particular action,whenever that action is dispatched and
then watcher saga comes into play

2.b) put
used to dispatch some action from worker saga

2.c) take (blocking)
@ useCase : need to handle Login action only once,even if it is dispatched
multiple times
@only take single parameter

2.d) call
to call watchersaga

3. how redux saga manages promises?

redux saga pauses itself whenver they counter a promise,
until the promise completes itself.

4.Saga follows the flow ,as it is defined , it cannot be hacked by
dispatching one action before the another


5. revision
import { take, put, call } from 'redux-saga/effects'

// workersaga
function* workerSaga() {
    console.log('Hey from worker')
    console.log(put({ type: 'ACTION_FROM_WORKER' }))
    yield put({ type: 'ACTION_FROM_WORKER' })
}

// byebyesaga
function* byebyeSaga() {
    console.log('bye bye')
}

// watchersaga
function* rootSaga() {
    yield take("LOGIN") //wont work unless we dispatch the 'HELLO' action
    yield call(workerSaga)
    // yield take('ADD_TO_CART)
    // yield take('BUY)
    yield take('LOGOUT')
    yield call(byebyeSaga)
}

export default rootSaga;


*/