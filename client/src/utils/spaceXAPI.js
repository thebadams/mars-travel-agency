import axios from "axios";

const BASEURL = `https://api.spacexdata.com/v4/launches/upcoming`;

export default {
  search: function (query) {
    return axios.get(BASEURL + query)
  }
};