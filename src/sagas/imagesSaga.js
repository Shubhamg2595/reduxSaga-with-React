import { takeEvery, select } from 'redux-saga/effects'
import { IMAGES } from '../constants'

const getPage = state => state.nextPage

function* handleImagesLoad() {
    const page = yield select(getPage)
    console.log('page', page)
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad)
}



/*
1) select effect helps us take the slice out of the state tree

*/

// import { takeEvery } from 'redux-saga/effects'

// import { IMAGES } from '../constants'

// // workersaga
// function* handleImagesLoad() {
//     console.log("loading images....")
// }

// // watchersaga
// function* rootSaga() {

//     yield takeEvery(IMAGES.LOAD, handleImagesLoad)



// }

// export default rootSaga;