//this is Profile redux-thunk....
import { messagesDownScroll } from '../../messagesDownScroll'

const initialState = {
  messages: [],
  loading: false,
  LoadingMessage: false,
  filter: '',
  searchForm: false,
  showProfile: false,
  messageText: "",
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case 'messages/load/start':
      return {
        ...state,
        loading: true,
        messages: [],
      };
    case 'messages/load/success':
      return {
        ...state,
        messages: action.payload,
        loading: false,
      };

    case 'message/send/start':
      return {
        ...state,
        LoadingMessage: true,
        messageText: '',
      };

    case 'message/send/success':
      return {
        ...state,
        messages: [...state.messages, action.payload],
        LoadingMessage: false,
      };

    case "filter/set":
      return {
        ...state,
        filter: action.payload,
      };

    case "searchForm/set":
      return {
        ...state,
        searchForm: !state.searchForm,
      };

    case "DELETE":
      return {
        ...state,
        messages: state.messages.filter((item) => item._id !== action.payload),
      };

    case "set/message/text":
      return {
        ...state,
        messageText: action.payload,
      };

    case "change/showProfile":
      return {
        ...state,
        showProfile: action.payload,
      };

    default:
      return state;
  }
}

//this is Contacts thunk....


//подгрузка сообщении...
export const loadMessages = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'messages/load/start',
    });
    fetch(
      `https://api.intocode.ru:8001/api/messages/5f2ea3801f986a01cefc8bcd/${id}`,
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'messages/load/success',
          payload: json,
          id: id,
        });
        messagesDownScroll();
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

//получение сообщений...
export const setMessageText = (messageText) => {
  return {
    type: "set/message/text",
    payload: messageText,
  };
};

//отправка сообщении....
export const sendMessage = (myId, contactId, messageText) => {
  return (dispatch) => {
    dispatch({
      type: 'message/send/start',
    });
    fetch('https://api.intocode.ru:8001/api/messages', {
      method: 'POST',
      body: JSON.stringify({
        myId: `${myId}`,
        contactId: `${contactId}`,
        type: 'text',
        content: `${messageText}`,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'message/send/success',
          payload: json,
        });
        messagesDownScroll();
      })
      .catch((error) => {
        console.error(error);
      });
  };
};


export const setSearchForm = () => {
  return {
    type: "searchForm/set",
  };
};

export const changeShowProfile = (showProfile) => {
  return {
    type: "change/showProfile",
    payload: !showProfile,
  };
};

// тут экшн креэйторы

// тут санки
