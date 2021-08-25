import {SIGN_IN} from '../../actions/types';
import {SIGN_OUT} from '../../actions/types';
import {SIGN_UP} from '../../actions/types';
import {EDIT_DATA} from '../../actions/types';

const initialState = {
  loginStatus: false,
  userLogin: {},
  userList: [
    {
      name: 'user',
      username: 'user1@gmail.com',
      password: 'user1',
      role: 'user1',
      image:
        'https://ichef.bbci.co.uk/news/507/cpsprodpb/AA0E/production/_119543534_animedua.jpg',
    },
    {
      name: 'user',
      username: 'user2@gmail.com',
      password: 'user2',
      role: 'user2',
      image: 'https://wayang.files.wordpress.com/2010/03/ramayana.jpg',
    },
  ],
};

const edit = (list, newData) => {
  const dataList = [...list];
  const index = list.findIndex(item => item.id === newData.id);
  dataList.splice(index, 1, newData);
  return dataList;
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        loginStatus: true,
        userLogin: action.data,
      };
    case SIGN_OUT:
      return {
        ...state,
        loginStatus: false,
        userLogin: {},
      };
    case EDIT_DATA:
      return {
        ...state,
        userList: edit(state.userList, action.data),
      };
    default:
      return state;
  }
};

export default authReducer;
