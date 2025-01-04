const initialState = {
    data: [],
  };
  
  const exampleReducer = (state = initialState, action) => {
    // console.log('action which being called',action)
    switch (action.type) {
    
      case 'SET_DATA':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default exampleReducer;
  