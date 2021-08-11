import { call, put } from 'redux-saga/effects'
import { request_get_posts } from '../requests/posts.requsets';
import { send_posts_success, send_posts_error } from '../../Actions/Actions';

export function* handler_get_posts() {
    try {
        const response = yield call(request_get_posts);
        const { data } = response;
        const posts = data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
        yield put(send_posts_success(posts));
    } catch (err) {
        yield put(send_posts_error(err));
    }
}