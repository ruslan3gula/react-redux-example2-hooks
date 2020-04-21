const initialValue = {
  text: "ABC"
};

export default function reducer(state = initialValue, action) {
  const newState ={ ...state};
  if (action.type==="EDIT_TEXT"){
    return {...newState, text:action.text}
  }

  return newState;
}
