
export const getPosts= () =>{
    return async (dispatch) =>{
      const response =  await fetch('https://academics.newtonschool.co/api/v1/quora/post', {
          headers:  {
             'projectID': 'f104bi07c490'
          }
      })
      let data=await response.json();
      const posts = data.data || [];
      dispatch({
        type: 'GETPOSTS',
        posts: posts
      })
    }
  }
  
  export const getChannels =()=>{
    return async (dispatch) =>{
      const response =  await fetch('https://academics.newtonschool.co/api/v1/quora/channel?limit=10', {
          headers:  {
             'projectID': 'f104bi07c490'
          }
      })
      let data=await response.json();
      const channels = data.data || [];
      dispatch({
        type: 'GETCHANNELS',
        channels: channels
      })
    }
  }
  
  