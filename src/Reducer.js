
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
      case "SETPOSTS":
        console.log("poooo",action.posts)
        return{
          ...state,
          posts:[...action.posts],
          } 
         
      default:
        return state;
    }
  };
 
  export default reducer;