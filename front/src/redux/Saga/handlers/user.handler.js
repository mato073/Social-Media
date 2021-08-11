import { call, put } from 'redux-saga/effects'
import { request_get_user } from '../requests/user.request';
import { send_user_success, send_user_error } from '../../Actions/Actions';

export function* handler_get_user() {
    try {
        const response = yield call(request_get_user);
        const { data } = response;
        yield put(send_user_success(data));
    } catch (err) {
        yield put(send_user_error(err));
    }
}