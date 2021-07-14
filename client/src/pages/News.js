import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import styled from 'styled-components';
import { getSpaceNews } from '.././utils/API';
import { getMarsPhotos } from ".././utils/API";




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
  const [photoState, setPhotoState ] = useState([]);

  useEffect(() => {
    
   getMarsPhotos()
   .then(data => {
       setPhotoState(data.data.photos)
     console.log(data.data.photos)
   })
  
  }, [])
 

  return (
    <div>
      {photoState.map(element => <img src={element.img_src}></img>)}
    </div>
  
  )

} 










export default News;
