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
// export const loadContactsMessages = (id) => {
//   return (dispatch) => {
//     dispatch({
//       type: 'contacts/messages/load/start'
//     });
//     fetch('https://api.intocode.ru:8001/api/contacts/messages/myId/contactId')
//       .then(res =>res.json())
//       .then((json) => {
//         dispatch({
//           type: 'contacts/messages/load/success',
//           payload: json
//         })
//       })
//   }
// }
// тут экшн креэйторы

// тут санки
