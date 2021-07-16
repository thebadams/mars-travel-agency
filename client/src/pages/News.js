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
    <p>Hello</p>
    
    

   
   
  )

} 










export default News;
