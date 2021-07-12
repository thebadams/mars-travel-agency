import axios from 'axios';
const key = "2NwgS8Gs1SBh2qJTVSC23AUBBJM0djehB1MrdKZE";
const insightURL = `https://api.nasa.gov/insight_weather/?api_key=${key}&feedtype=json&ver=1.0`;
const spaceNewsAPI = "https://spaceflightnewsapi.net/api/v2/reports";

export default {
  getWeather: function() {
    return axios.get(insightURL)
  },
  getSpaceNews: function() {
    return axios.get(spaceNewsAPI);
  },
  getFlights: function() {
    return axios.get("/api/booking")
  },
  getFlight: function(id) {
    return axios.get("/api/booking/" + id)
  }
};