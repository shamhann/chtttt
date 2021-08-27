

//this is Profile redux-thunk....
const initialState = {
  item: [],
  filter: "",
  loading: false,
  messageText: "",
  loadingMessage: false,
  searchForm: false,
  showProfile: false,
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case "message/load/start":
      return {
        ...state,
        loading: true,
      };

    case "message/load/success":
      return {
        ...state,
        item: action.payload,
        loading: false,
      };

    case "message/send/start":
      return {
        ...state,
        loadingMessage: true,
        messageText: "",
      };

    case "message/send/success":
      return {
        ...state,
        item: [...state.item, action.payload],
        loadingMessage: false,
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
        item: state.item.filter((item) => item._id !== action.payload),
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
      type: "message/load/start",
    });

    fetch(
      `https://api.intocode.ru:8001/api/messages/5f2ea3801f986a01cefc8bcd/${id}`
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "message/load/success",
          payload: json,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//deleting messages...
export const setDeleteMessages = (id) => {
  return (dispatch) => {
    dispatch({
      type: "delete/message/start",
      payload: id,
    });
    fetch(
      `https://api.intocode.ru:8001/api/messages/5f2ea3801f986a01cefc8bcd/${id}`,
      {
        method: "DELETE",
      }
    ).then(() => {
      dispatch({
        type: "DELETE",
        payload: id,
      });
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
      type: "message/send/start",
    });
    fetch("https://api.intocode.ru:8001/api/messages", {
      method: "POST",
      body: JSON.stringify({
        myId: `${myId}`,
        contactId: `${contactId}`,
        type: "text",
        content: messageText,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "message/send/success",
          payload: json,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

//фильтрация сообщений
export const setFilterMessages = (text) => {
  return (dispatch) => {
    dispatch({
      type: "filter/set",
      payload: text,
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
