import axios from 'axios';
const weatherKEY ="2NwgS8Gs1SBh2qJTVSC23AUBBJM0djehB1MrdKZE";
const BASEURL = `https://api.nasa.gov/insight_weather/?api_key=${weatherKEY}&feedtype=json&ver=1.0`;

// export default {
//   search: function (query) {
//     return axios.get(BASEURL + query)
//   }
// };
const insightMARSAPI = async () => {
  try {
    const response = await axios.get(BASEURL);
    console.log(response);
  
    return response;
  } catch (err) {
    console.log(err);
  }
};


export default insightMARSAPI;