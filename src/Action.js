
export const getPosts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://academics.newtonschool.co/api/v1/quora/post', {
        headers: {
          'projectID': 'f104bi07c490'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }

      const data = await response.json();
      const posts = data.data || [];
      
      dispatch({
        type: 'GETPOSTS',
        posts: posts
      });
    } catch (error) {
      console.error('Error fetching posts:', error);
      
    }
  };
};

export const getChannels = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://academics.newtonschool.co/api/v1/quora/channel?limit=10', {
        headers: {
          'projectID': 'f104bi07c490'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch channels');
      }

      const data = await response.json();
      const channels = data.data || [];
      
      dispatch({
        type: 'GETCHANNELS',
        channels: channels
      });
    } catch (error) {
      console.error('Error fetching channels:', error);
      // Optionally dispatch an error action or handle the error in any other way.
    }
  };
};

// export const getPosts= () =>{
//     return async (dispatch) =>{
//       const response =  await fetch('https://academics.newtonschool.co/api/v1/quora/post', {
//           headers:  {
//              'projectID': 'f104bi07c490'
//           }
//       })
//       let data=await response.json();
//       const posts = data.data || [];
//       dispatch({
//         type: 'GETPOSTS',
//         posts: posts
//       })
//     }
//   }
  
//   export const getChannels =()=>{
//     return async (dispatch) =>{
//       const response =  await fetch('https://academics.newtonschool.co/api/v1/quora/channel?limit=10', {
//           headers:  {
//              'projectID': 'f104bi07c490'
//           }
//       })
//       let data=await response.json();
//       const channels = data.data || [];
//       dispatch({
//         type: 'GETCHANNELS',
//         channels: channels
//       })
//     }
//   }
  
  