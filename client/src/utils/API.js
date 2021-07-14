import axios from 'axios';
const key = "2NwgS8Gs1SBh2qJTVSC23AUBBJM0djehB1MrdKZE";
const insightURL = `https://api.nasa.gov/insight_weather/?api_key=${key}&feedtype=json&ver=1.0`;
const spaceNewsAPI = "https://spaceflightnewsapi.net/api/v2/reports";

// export default {
//   getWeather: function() {
//     return axios.get(insightURL)
//   },
//   getFlights: function() {
//     return axios.get("/api/booking")
//   },
//   getFlight: function(id) {
//     return axios.get("/api/booking/" + id)
//   }
// };
export function getSpaceNews() {
  return fetch("https://spaceflightnewsapi.net/api/v2/reports")
  .then(data => 
    data.json())
  
};

export async function getMarsPhotos() {
  const apiKey = "2NwgS8Gs1SBh2qJTVSC23AUBBJM0djehB1MrdKZE";
  const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${apiKey}&sol=1000&page=25`)
  return response;
  
  };
