import axios from "axios";
export const normalPost = (data, api) =>{
    console.log(data,api,"sssss");
    return axios.post(api,data);
}

export const authPost = (api, data, token) => {
    return axios.post(api, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };