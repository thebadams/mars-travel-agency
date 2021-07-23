const router = require('express').Router();
// api call for space news from launch api by spacedevs
const API = "https://spaceflightnewsapi.net/api/v2/reports";
// api call to nasa insight api that returns weather reports from Mars
const weatherKEY ="2NwgS8Gs1SBh2qJTVSC23AUBBJM0djehB1MrdKZE";
const weatherURL = `https://api.nasa.gov/insight_weather/?api_key=${weatherKEY}&feedtype=json&ver=1.0`;
// axios

const query = "";
const spaceXAPIKEY = `https://api.spacexdata.com/v3/launches/upcoming`;
// can also use /v4
// end points are /launches/upcoming


const axios = require('axios');



// API CALL TO LAUNCH NEWS

const spaceNewsAPI = async () => {
  try {
    const response = await axios.get(API);
    console.log(response);
  
    return response;
  } catch (err) {
    console.log(err);
  }
};



// API CALL TO SPACEX LAUNCH DATA

const spaceXAPI = async () => {
  try {
    const response = await axios.get(spaceXAPIKEY);
    console.log(response);
  
    return response;
  } catch (err) {
    console.log(err);
  }
};

// API CALL TO NASA INSIGHT API FOR WEATHER REPORTS FROM MARS

const insightMARSAPI = async () => {
  try {
    const response = await axios.get(weatherURL);
    console.log(response);
  
    return response;
  } catch (err) {
    console.log(err);
  }
};


spaceNewsAPI();




