const initState = {
  profile: [],
  loading: false
}

const profile = (state = initState, action) => {
  switch (action.type) {
    case 'profile/load/start':
      return {
        ...state,
        loading: true
      };
    case 'profile/load/success':
      return {
        ...state,
        loading: false ,
        profile: [...state.profile,action.payload],
      };
    default:
      return state
  }
}

export default profile

export const loadProfile = () => {
  return (dispatch) => {
    dispatch({
      type: "profile/load/start",
    });
    fetch("https://api.intocode.ru:8001/api/profile")
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "profile/load/success",
          payload: json,
        });
      });
  };
};
