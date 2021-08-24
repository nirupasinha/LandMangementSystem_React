
import axios from "axios";
import url from  "./urlConstant"
const service = ({
  signup: async(payload) =>{
    // console.log("payload ====>> ",payload)
    const headers = { 
        'Authorization': 'Bearer my-token',
        'Access-Control-Allow-Origin': '*'
    };
    return axios.post(url.signUp, payload, { headers })
        .then(response => {
            // this.setState({ articleId: response.data })
         console.log("Here is response ",response.data)
         return response.data;
        })
        .catch(err=> console.log("Error in signup ",err));
  },

  login: async(payload) =>{
    // console.log("payload login ",payload)
    const headers = { 
        'Authorization': 'Bearer my-token',
        'Access-Control-Allow-Origin': '*'
    };
    return axios.post(url.login, payload, { headers })
        .then(response => {
        //  console.log("Here is response ",response.data)
         return response.data;
        })
        .catch(err=> console.log("Error in login ",err));
  },
  
});

export default service;