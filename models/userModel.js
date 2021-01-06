/**
 * Created by ranyanchuan on 2018/3/11.
 */
import * as UserService from '../services/userService';

export default {
  namespace: 'User',
  state: {
    name: '',
    id: '',
    registerStatus: false,
  },
  subscriptions: {
    setup({ dispatch }) {
    },
  },
  effects: {
    * login({ payload }, { call, put }) {
      const data = yield call(UserService.login, payload);
      yield put({ type: 'addUserSuccess', payload: { data } });
    },
    // * register({ payload }, { call, put }) {
    //   const { username, password } = payload;
    //   const data = yield call(UserService.register, payload);
    //   yield put({ type: 'registerSuccess', payload: { data } });
    // },
  },
  reducers: {
    addUserSuccess(state, { payload: { data } }) {
      console.log('reducers', data);
      return { ...state, registerStatus: true };
    },

   // registerSuccess(state, { payload: { data } }) {
   //    console.log('=====', data);
   //    return { ...state, registerStatus: data.status };
   //  },
  },
};
