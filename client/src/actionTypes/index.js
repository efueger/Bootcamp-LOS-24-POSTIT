/**
 * action types
 */
export default {
  SIGNUP_REQUEST: 'SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'SIGNUP_FAILURE',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
  LOAD_GROUP_MESSAGES_REQUEST: 'LOAD_GROUP_MESSAGES_REQUEST',
  LOAD_GROUP_MESSAGES_SUCCESS: 'LOAD_GROUP_MESSAGES_SUCCESS',
  LOAD_GROUP_MESSAGES_FAILURE: 'LOAD_GROUP_MESSAGES_FAILURE',
  LOAD_GROUP_MEMBERS_REQUEST: 'LOAD_GROUP_MEMBERS_REQUEST',
  LOAD_GROUP_MEMBERS_SUCCESS: 'LOAD_GROUP_MEMBERS_SUCCESS',
  LOAD_GROUP_MEMBERS_FAILURE: 'LOAD_GROUP_MEMBERS_FAILURE',
  LOAD_GROUPS_REQUEST: 'LOAD_GROUPS_REQUEST',
  LOAD_GROUPS_SUCCESS: 'LOAD_GROUPS_SUCCESS',
  LOAD_GROUPS_FAILURE: 'LOAD_GROUPS_FAILURE',
  LOAD_GROUP_REQUEST: 'LOAD_GROUP_REQUEST',
  LOAD_GROUP_SUCCESS: 'LOAD_GROUP_SUCCESS',
  LOAD_GROUP_FAILURE: 'LOAD_GROUP_FAILURE',
  CREATE_GROUP_REQUEST: 'CREATE_GROUP_REQUEST',
  CREATE_GROUP_SUCCESS: 'CREATE_GROUP_SUCCESS',
  CREATE_GROUP_FAILURE: 'CREATE_GROUP_FAILURE',
  SEARCH_REQUEST: 'SEARCH_REQUEST',
  SEARCH_SUCCESS: 'SEARCH_SUCCESS',
  SEARCH_FAILURE: 'SEARCH_FAILURE',
  ADD_MEMBER_REQUEST: 'ADD_MEMBER_REQUEST',
  ADD_MEMBER_SUCCESS: 'ADD_MEMBER_SUCCESS',
  ADD_MEMBER_FAILURE: 'ADD_MEMBER_FAILURE',
  SELECT_MEMBER: 'SELECT_MEMBER',
  DELETE_MEMBER: 'DELETE_MEMBER',
  DELETE_GROUP: 'DELETE_GROUP',
  SEND_MESSAGE_REQUEST: 'SEND_MESSAGE_REQUEST',
  SEND_MESSAGE_SUCCESS: 'SEND_MESSAGE_SUCCESS',
  SEND_MESSAGE_FAILURE: 'SEND_MNESSAGE_FAILURE',
  VISIBILTY_FILTERS: {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_READ: 'SHOW_READ',
    SHOW_UNREAD: 'SHOW_UNREAD',
    SHOW_CRITICAL: 'SHOW_CRITICAL',
    SHOW_URGENT: 'SHOW_URGENT',
    SHOW_NORMAL: 'SHOW_NORMAL'
  },
  SELECTION_FILTERS: {
    MARK_AS_READ: 'MARK_AS_READ',
    MARK_AS_UNREAD: 'MARK_AS_UNREAD',
    SHOW_USER_DETAILS: 'SHOW_USER_DETAILS',
  }
};
