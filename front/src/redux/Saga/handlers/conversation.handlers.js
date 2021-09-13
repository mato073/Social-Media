import { call, put } from 'redux-saga/effects'
import { request_get_conversations } from '../requests/conversation.request';
import { send_conversation_success, send_conversation_error } from '../../Actions/Actions';

export function* handler_get_conversation() {
  try {
    const response = yield call(request_get_conversations);
    const { data } = response;
    yield put(send_conversation_success(data));
  } catch (err) {
    yield put(send_conversation_error(err));
  }
}