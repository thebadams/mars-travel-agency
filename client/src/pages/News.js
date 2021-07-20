import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import styled from 'styled-components';
import { getSpaceNews } from '.././utils/API';
import { getMarsPhotos } from ".././utils/API";
import { getFlights } from ".././utils/API";





//Page Components


//Animations

// const News = () => {
// // const newsData = res.data;
// // console.log(newsData);
// const [news, setNewsState ] = useState([]);

// useEffect(() => {
//   let mounted = true;
//  getSpaceNews()
//  .then(items => {
//    if(mounted) {
//      setNewsState(items)
//    }
//    console.log(items)
//  })
//  return () => mounted = false;
// }, [])


//   return (
// <Carousel activeIndex={news} onSelect={useEffect}>
//   {news.map(item => {
//     return (
//       <>
//     <Carousel.Item>
//         <img
//           className="d-block w-10"
//           src={item.imageUrl}
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>{item.title}</h3>
//           <p>{item.summary}</p>
//         </Carousel.Caption>
  
//       </Carousel.Item>
//       </>
//     )
//   })}

//     </Carousel>
 
//   )
 
// };


const News = () => {
 

  const [flightState, setFlightState ] = useState([]);

  useEffect(() => {
    
   getFlights()
   .then(data => {
       setFlightState(data.data)
     console.log(data.data)
     console.log(data.data[0].aircraftType)
   })
  
  }, [])
 

  return (
    
    // <div>
    //     {flightState.map(element => {
    //     return (
    //       <li>{element.aircraftType}</li>
    //     )
    //     )}

    // </div>
    <Container class="container">
  <h1>Page Coming Soon</h1>
  <div class="component-astronaut">
    <div class="space-bg">
      <div class="astronaut-stars">
        <div class="astronaut-stars-background"></div>
        <div class="astronaut-star astronaut-star-1"></div>
        <div class="astronaut-star astronaut-star-2"></div>
        <div class="astronaut-star astronaut-star-3"></div>
        <div class="astronaut-star astronaut-star-4"></div>
        <div class="astronaut-star astronaut-star-5"></div>
        <div class="astronaut-star astronaut-star-6"></div>
        <div class="astronaut-star astronaut-star-7"></div>
        <div class="astronaut-star astronaut-star-8"></div>
        <div class="astronaut-star astronaut-star-9"></div>
        <div class="astronaut-star astronaut-star-10"></div>
        <div class="astronaut-star astronaut-star-11"></div>
      </div>
    </div>
    <div class="astronaut-frame">
      <div class="astronaut">
        <div class="astronaut-backpack"></div>
        <div class="astronaut-body">
          <div class="astronaut-body-shadow"></div>
          <div class="strap strap-left"></div>
          <div class="strap strap-right"></div>
          <div class="astronaut-body-chest"></div>
        </div>
        <div class="astronaut-ear astronaut-ear-left">
          <div class="astronaut-antenna"></div>
        </div>
        <div class="astronaut-ear astronaut-ear-right"></div>
        <div class="astronaut-head">
          <div class="astronaut-face"></div>
        </div>
      </div>
    </div>
  </div>
</Container>
   
  )

} 


const Container = styled.div`


  width: 100vw;
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #1b2735 10%, #090e13 100%);

h1 {
  text-align: center;
  color: #A1D2D3;
  padding-top: 100px;
  font-size: 4rem;
}
.container {
  position: relative;
  width: 100%;
  height: 100%;
}
.component-astronaut {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.component-astronaut {
  width: 240px;
  height: 240px;
  max-width: 80vw;
  max-height: 80vw;
  margin: 0 auto;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.component-astronaut .space-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 4px solid #fff;
  overflow: hidden;
}
.component-astronaut .space-bg.is-flashing {
  border-color: #c1403d;
}
.component-astronaut .astronaut-frame {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid #fff;
  overflow: hidden;
  z-index: 12;
}
.component-astronaut .astronaut-frame.is-flashing {
  border-color: #c1403d;
}
.component-astronaut .astronaut {
  position: absolute;
  top: 6.67%;
  left: -1.25%;
  width: 100%;
  height: 100%;
  z-index: 12;
  transform: translate3d(0, 0, 0);
  -webkit-animation: astronaut 3s ease-in-out infinite;
          animation: astronaut 3s ease-in-out infinite;
}
.component-astronaut .astronaut > .astronaut-head {
  position: absolute;
  width: 36.32%;
  height: 36.32%;
  border-radius: 50%;
  top: 29.91%;
  left: 34.188%;
  background: #ebeef7;
}
.component-astronaut .astronaut > .astronaut-head > .astronaut-face {
  position: absolute;
  width: 64.718%;
  height: 64.718%;
  border-radius: 50%;
  background: #a1d2d3;
  margin: 17.65%;
  overflow: hidden;
  z-index: 999;
}
.component-astronaut .astronaut > .astronaut-head > .astronaut-face:before {
  content: '';
  position: absolute;
  left: -14.55%;
  background: #c3e3e7;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.component-astronaut .astronaut > .astronaut-ear {
  position: absolute;
  width: 6.41%;
  height: 10.256%;
  background: #d1d3d7;
  top: 42.735%;
}
.component-astronaut .astronaut > .astronaut-ear.astronaut-ear-left {
  left: 30.769%;
  border-radius: 30% 0px 0px 30%;
}
.component-astronaut .astronaut > .astronaut-ear.astronaut-ear-left > .astronaut-antenna {
  position: absolute;
  width: 60%;
  height: 37.52%;
  border-radius: 50%;
  background: #d1d3d7;
  top: -133.42%;
  left: 6.67%;
}
.component-astronaut .astronaut > .astronaut-ear.astronaut-ear-left:before {
  content: '';
  position: absolute;
  width: 20.02%;
  min-width: 1px;
  height: 104.23%;
  background: #d1d3d7;
  top: -104.23%;
  left: 26.69%;
}
.component-astronaut .astronaut > .astronaut-ear.astronaut-ear-right {
  left: 67.09%;
  border-radius: 0px 30% 30% 0px;
}
.component-astronaut .astronaut .astronaut-backpack {
  position: absolute;
  width: 40.17%;
  height: 34.189%;
  background: #ebeef7;
  top: 56.25%;
  left: 31.62%;
  border-radius: 5px;
}
.component-astronaut .astronaut .astronaut-backpack:before {
  position: absolute;
  left: 0;
  content: '';
  width: 89.38%;
  height: 100%;
  border-radius: 5px;
  margin: 6.25% 5.32%;
  background: #b9bcc2;
}
.component-astronaut .astronaut .astronaut-body {
  position: absolute;
  width: 47%;
  height: 51.28%;
  border-radius: 30% 30% 0px 0px;
  left: 27.78%;
  top: 59.83%;
  background: #ebeef7;
}
.component-astronaut .astronaut .astronaut-body > .astronaut-body-shadow {
  position: absolute;
  width: 90.93%;
  height: 83.34%;
  border-radius: 50%;
  overflow: hidden;
  top: -10.834%;
  left: 4.55%;
}
.component-astronaut .astronaut .astronaut-body > .astronaut-body-shadow:after {
  content: '';
  position: absolute;
  width: 80.01%;
  height: 80.01%;
  border-radius: 50%;
  background: #959698;
  left: 12.5%;
  top: -45%;
}
.component-astronaut .astronaut .astronaut-body > .astronaut-body-shadow:before {
  content: '';
  position: absolute;
  width: 80.01%;
  height: 80.01%;
  border-radius: 50%;
  background: #b9bcc2;
  left: 12.5%;
  top: -40%;
}
.component-astronaut .astronaut .astronaut-body .strap {
  position: absolute;
  width: 7.275%;
  height: 29.17%;
  background: #474a4b;
  border-radius: 5px;
  z-index: 999;
}
.component-astronaut .astronaut .astronaut-body .strap.strap-left {
  left: 10.91%;
}
.component-astronaut .astronaut .astronaut-body .strap.strap-right {
  left: 83.66%;
}
.component-astronaut .astronaut .astronaut-body .strap:after {
  content: '';
  position: absolute;
  width: 62.5%;
  height: 214.381%;
  background: #d1d3d7;
  top: 100%;
  left: 25%;
}
.component-astronaut .astronaut .astronaut-body .astronaut-body-chest {
  position: absolute;
  width: 46.63%;
  height: 68.38%;
  background: #dbdee0;
  top: 29.91%;
  left: 27.98%;
  border-radius: 10px;
}
.component-astronaut .astronaut .astronaut-body .astronaut-body-chest:before,
.component-astronaut .astronaut .astronaut-body .astronaut-body-chest:after {
  position: absolute;
  content: '';
  width: 12%;
  height: 7.5%;
  border-radius: 50%;
  right: 14%;
}
.component-astronaut .astronaut .astronaut-body .astronaut-body-chest:before {
  top: 8.75%;
  background: #c1403d;
}
.component-astronaut .astronaut .astronaut-body .astronaut-body-chest:after {
  top: 20%;
  background: #b2b7bb;
}
.component-astronaut .astronaut-stars {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.component-astronaut .astronaut-stars .astronaut-stars-background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #1b2735;
  border-radius: 50%;
}
.component-astronaut .astronaut-stars .astronaut-stars-background.is-flashing {
  -webkit-animation: isFlashingDanger 3s infinite;
          animation: isFlashingDanger 3s infinite;
}
@-webkit-keyframes isFlashingDanger {
  0% {
    background-color: #1b2735;
  }
  50% {
    background-color: #c1403d;
  }
  100% {
    background-color: #1b2735;
  }
}
@keyframes isFlashingDanger {
  0% {
    background-color: #1b2735;
  }
  50% {
    background-color: #c1403d;
  }
  100% {
    background-color: #1b2735;
  }
}
.component-astronaut .astronaut-stars .astronaut-star {
  position: absolute;
  background: #fff;
  border-radius: 50%;
  -webkit-animation: twinkle 2s ease-in-out infinite;
          animation: twinkle 2s ease-in-out infinite;
}
.component-astronaut .astronaut-stars .astronaut-star:before {
  content: '';
  position: absolute;
  background: #fff;
  border-radius: 50%;
}
.component-astronaut .astronaut-stars .astronaut-star.astronaut-star-1 {
  width: 1.667%;
  height: 1.667%;
  border-radius: 5px;
  top: 31.25%;
  left: 15.417%;
  -webkit-animation-delay: 0.5s;
          animation-delay: 0.5s;
}
.component-astronaut .astronaut-stars .astronaut-star.astronaut-star-2 {
  width: 2.9167%;
  height: 1.25%;
  top: 10.4167%;
  left: 45.834%;
  -webkit-animation-delay: 1s;
          animation-delay: 1s;
}
.component-astronaut .astronaut-stars .astronaut-star.astronaut-star-2:before {
  width: 44.34%;
  height: 242.16%;
  top: -69.189%;
  left: 29.56%;
}
.component-astronaut .astronaut-stars .astronaut-star.astronaut-star-3 {
  width: 1.25%;
  height: 0.4167%;
  top: 25%;
  left: 35.417%;
  -webkit-animation-delay: 0.8s;
          animation-delay: 0.8s;
}
.component-astronaut .astronaut-stars .astronaut-star.astronaut-star-3:before {
  width: 34.59%;
  height: 314.75%;
  top: -104.92%;
  left: 34.59%;
}
.component-astronaut .astronaut-stars .astronaut-star.astronaut-star-4 {
  width: 2.9167%;
  height: 1.25%;
  top: 41.67%;
  left: 20.833%;
  -webkit-animation-delay: 1.2s;
          animation-delay: 1.2s;
}
.component-astronaut .astronaut-stars .astronaut-star.astronaut-star-4:before {
  width: 44.34%;
  height: 242.16%;
  top: -69.189%;
  left: 29.56%;
}
.component-astronaut .astronaut-stars .astronaut-star.astronaut-star-5 {
  width: 1.25%;
  height: 0.4167%;
  top: 6.25%;
  left: 60.4167%;
  -webkit-animation-delay: 1.9s;
          animation-delay: 1.9s;
}
.component-astronaut .astronaut-stars .astronaut-star.astronaut-star-5:before {
  width: 34.59%;
  height: 314.75%;
  top: -104.92%;
  left: 34.59%;
}
.component-astronaut .astronaut-stars .astronaut-star.astronaut-star-6 {
  width: 1.25%;
  height: 0.4167%;
  top: 25%;
  left: 74.167%;
  -webkit-animation-delay: 1.5s;
          animation-delay: 1.5s;
}
.component-astronaut .astronaut-stars .astronaut-star.astronaut-star-6:before {
  width: 34.59%;
  height: 314.75%;
  top: -104.92%;
  left: 34.59%;
}
.component-astronaut .astronaut-stars .astronaut-star.astronaut-star-7 {
  width: 2.9167%;
  height: 1.25%;
  top: 62.5%;
  left: 85.4167%;
  -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s;
}
.component-astronaut .astronaut-stars .astronaut-star.astronaut-star-7:before {
  width: 44.34%;
  height: 242.16%;
  top: -69.189%;
  left: 29.56%;
}
.component-astronaut .astronaut-stars .astronaut-star.astronaut-star-8 {
  width: 1.25%;
  height: 0.4167%;
  top: 75%;
  left: 79.167%;
  -webkit-animation-delay: 0.8s;
          animation-delay: 0.8s;
}
.component-astronaut .astronaut-stars .astronaut-star.astronaut-star-8:before {
  width: 34.59%;
  height: 314.75%;
  top: -104.92%;
  left: 34.59%;
}
.component-astronaut .astronaut-stars .astronaut-star.astronaut-star-9 {
  width: 1.25%;
  height: 0.4167%;
  top: 62.5%;
  left: 12.5%;
  -webkit-animation-delay: 1.5s;
          animation-delay: 1.5s;
}
.component-astronaut .astronaut-stars .astronaut-star.astronaut-star-9:before {
  width: 34.59%;
  height: 314.75%;
  top: -104.92%;
  left: 34.59%;
}
.component-astronaut .astronaut-stars .astronaut-star.astronaut-star-10 {
  width: 2.9167%;
  height: 1.25%;
  top: 38.33%;
  left: 77.9167%;
  -webkit-animation-delay: 0.8s;
          animation-delay: 0.8s;
}
.component-astronaut .astronaut-stars .astronaut-star.astronaut-star-10:before {
  width: 44.34%;
  height: 242.16%;
  top: -69.189%;
  left: 29.56%;
}
.component-astronaut .astronaut-stars .astronaut-star.astronaut-star-11 {
  width: 1.25%;
  height: 1.25%;
  border-radius: 5px;
  top: 12.5%;
  left: 20.833%;
  -webkit-animation-delay: 1s;
          animation-delay: 1s;
}
@-webkit-keyframes twinkle {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
}
@keyframes twinkle {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
}
@-webkit-keyframes astronaut {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-4.167%);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes astronaut {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-4.167%);
  }
  100% {
    transform: translateY(0px);
  }
}

`







export default News;
