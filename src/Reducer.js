
const initialState = {
    posts:[],
    channels: [],
    
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      
      case "GETPOSTS":
        return{
          ...state,
          posts: action.posts,
        }
      case "GETCHANNELS":
        return{
          ...state,
          channels:action.channels,
        }  
         
      default:
        return state;
    }
  };
 
  export default reducer;