const initialState = {
  messages: [],
  loading: false,
  LoadingMessage: false,
  loadingDeleteMessages: false,
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
        LoadingMessage: false,
        messages: [...state.messages, action.payload],
      };

    case "get/message/text":
      return {
        ...state,
        messageText: action.payload,
      };
    case 'message/delete/start':
      return {
        ...state,
        loadingDeleteMessages: true,
      }
    case 'message/delete/success':
      return {
        ...state,
        loadingDeleteMessages: false,
        messages: state.messages.filter(
          (message) => message._id !== action.payload,
        ),
      }

    default:
      return state;
  }
}

//подгрузка сообщений
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
      })
  };
};

//получение сообщений
export const getMessageText = (messageText) => {
  return {
    type: "get/message/text",
    payload: messageText,
  };
};

//отправка сообщений
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
      })
  };
};
export const removeMessage = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'message/delete/start',
    });
    fetch(`https://api.intocode.ru:8001/api/messages/${id}`, {
      method: 'DELETE',
    })
      .then((json) => {
        dispatch({
          type: 'message/delete/success',
          payload: id,
        });
      })
  };
};
