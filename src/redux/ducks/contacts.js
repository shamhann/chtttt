const initialState = {
  loading: false,
  contacts: [],
  filter: '',
  selectedContactsId: null,
};

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case 'contacts/load/start':
      return {
        ...state,
        loading: true
      }
    case 'contacts/load/success':
      return {
        ...state,
        contacts: action.payload,
        loading: false
      }
    case "contacts/selected":
      return {
        ...state,
        selectedContactId: action.payload,
      };
    default:
      return state;
  }
}

export const loadContacts = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'contacts/load/start'
    });
    fetch('https://api.intocode.ru:8001/api/contacts')
      .then(res =>res.json())
      .then((json) => {
        dispatch({
          type: 'contacts/load/success',
          payload: json
        })
      })
  }
}
export const selectedContact = (contactId) => {
  return {
    type: "contacts/selected",
    payload: contactId,
  };
};

// тут экшн креэйторы

// тут санки
