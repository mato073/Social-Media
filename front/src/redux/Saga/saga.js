import { takeLatest } from 'redux-saga/effects'
import { Action } from '../Actions/Actions'

//Import handelers
import { handler_get_posts } from './handlers/posts.handlers';
import { handler_get_user } from './handlers/user.handler';
import { handler_get_user_posts } from './handlers/userPosts.handler';

export function* watcherSaga() {
    yield takeLatest(Action.GET_POSTS.REQUEST, handler_get_posts);
    yield takeLatest(Action.GET_USER.REQUEST, handler_get_user);
    yield takeLatest(Action.GET_USER_POSTS.REQUEST, handler_get_user_posts);
}