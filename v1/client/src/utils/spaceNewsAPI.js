import axios from 'axios';
const BASEURL =  "https://spaceflightnewsapi.net/api/v2/reports";

export default {
  search: function (query) {
    return axios.get(BASEURL + query)
  }
};