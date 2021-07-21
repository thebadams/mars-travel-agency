import React, { useEffect, useState, Component } from "react";
import Button from '@material-ui/core/Button';
import { Container, Grid } from '@material-ui/core';
import styled from "styled-components";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useAppStateContext } from "../../utils/GlobalContext";
import reservation from '../../utils/reservation';
import { data } from "jquery";
import { render } from 'react-dom';

const FlightStyle = styled.div`
  opacity: 0.9;
  position: absolute;
  margin-right: auto;
  margin-left: auto;
  top: 15%;
  left: 40%;
  box-sizing: border-box;
  perspective: 700px;
  font-family: Roboto-Regular, HelveticaNeue, Arial, sans-serif;


#root {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ededed;
}

#back {
    width: 26px;
    height: 26px;
    position: absolute;
    z-index: 10;
    left: -4px;
    top: 29px;
}

#settings {
    width: 100px;
    height: 26px;
    position: absolute;
    z-index: 10;
    top: 117px;
    right: 0px;
}

.App {
    border-radius: 25px;
    font-family: sans-serif;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    box-shadow: 0px 0px 41px -7px rgba(0, 0, 0, 0.15);
    width: 400px;
    height: auto;
    background: #f3f3f3;
}

#headerText {
    color: rgb(34, 34, 34);
    font-weight: bold;
    font-size: 20px;
    width: 340px;
    height: 46px;
    text-align: center;
    margin-top: 30px;
    word-spacing: 2px;
    letter-spacing: 1px;
}

#tripDetail {
    display: flex;
    flex-direction: column;
    text-align: left;
    color: #747474;
    font-size: 10px;
    margin-top: 26px;
    letter-spacing: 2px;
    margin-bottom: 26px;
}

#tripDest {
    color: #141414;
    font-weight: bold;
    font-size: 28px;
    letter-spacing: 1px;
    display: flex;
}

#oneWay {
    font-size: 10px;
    font-weight: 100;
    background: #498eff;
    border: 1px solid #0061ff;
    color: #fff;
    position: relative;
    height: 20px;
    padding: 3px 5px;
    margin-top: 7px;
    border-radius: 3px;
    margin-left: 7px;
}

#headerInput {
    width: 340px;
    height: 40px;
    border: none;
    background: #262626;
    border-radius: 5px;
    border: 1px solid rgb(81, 81, 81);
    padding-top: 8px;
    padding-left: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
}

#cardContainer {
    position: relative;
    width: 340px;
    height: 100px;
    border-radius: 5px;
    transform-origin: bottom;
    margin: 20px;
    cursor: pointer;
}

#first {
    width: 340px;
    height: 100px;
    position: absolute;
    border-radius: 5px;
    color: #000;
    transform-origin: bottom;
    transform-style: preserve-3d;
    transition: 0.5s;
    border-radius: 8px;
    display: flex;
    /* backface-visibility: hidden; */
}

#detailDate {
    color: #a09a9a;
    font-size: 9px;
    padding-top: 11px;
}

#detailTime {
    font-weight: bold;
    font-size: 21px;
    color: #000;
}

#detailSub {
    width: 200px;
    height: 100px;
    position: relative;
    border-radius: 0px 8px 8px 0px;
    background: #0a0a0a;
}

#firstDisplay {
    width: 100%;
    height: 100px;
    position: absolute;
    background: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 18px 23px;
    flex-wrap: wrap;
    backface-visibility: hidden;
    box-shadow: 0px 0px 25px -1px rgba(0, 0, 0, 0.17);
}

#info {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #b2b2b2;
    font-size: 10px;
}

#flightDetail {
    font-size: 23px;
    font-weight: bold;
    color: #3f3f3f;
    flex: 0.5;
}

#animContainer {
    padding-left: 0px;
    margin-left: 120px;
    position: absolute;
    width: 19px;
    height: 10px;
    top: 50px;
    left: 25px;
    overflow: hidden;
}

#anim {
    width: 54px;
    position: absolute;
    display: flex;
    animation: slidein 1s infinite linear;
}

@keyframes slidein {
    to {
        transform: translateX(-17px);
    }

    from {
        transform: translateX(0px);
    }
}

#circle {
    width: 5px;
    height: 5px;
    background: #707070;
    border-radius: 50%;
    margin-right: 13px;
}

#firstTop {
    width: 340px;
    height: 100px;
    position: absolute;
    background: #ffffff;
    backface-visibility: hidden;
    border-radius: 8px;
    border-radius: 8px;
    box-shadow: 0px 0px 3px 0px rgba(132, 132, 132, 0.15);
    display: flex;
    justify-content: space-around;
}

#timecontainer {
    display: flex;
    padding-right: 10px;
    padding-top: 14px;
}

#firstBehind {
    width: 340px;
    height: 100px;
    position: absolute;
    background: #fff;
    transform-origin: center;
    transform: rotate3d(1, 0, 0, -180deg);
    backface-visibility: hidden;
    border-radius: 8px;
    border: 1px dashed #d1d1d1;
    border-left: none;
    border-right: none;
}

#firstBehindDisplay {
    width: 100%;
    height: 100px;
    position: absolute;
    background: #fff;
    border-radius: 8px;
    padding: 12px 23px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 11px 25px -1px rgba(0, 0, 0, 0.17);
}

#firstBehindRow {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 7px;
    text-align: left;
}

#detail {
    font-size: 15px;
    color: rgb(69, 69, 69);
    font-weight: bold;
}

#detailLabel {
    display: flex;
    flex-direction: row;
    color: #686868;
    font-size: 10px;
    font-weight: 100;
}

#second {
    width: 340px;
    height: 50px;
    position: absolute;
    bottom: -2px;
    transform-origin: bottom;
    transform-style: preserve-3d;
    transition: 0.2s;
    border-radius: 8px;
}

#secondTop {
    width: 340px;
    height: 50px;
    position: absolute;
    background: rgb(231, 231, 231);
    backface-visibility: hidden;
    border-radius: 8px;
}

#thirdTop {
    width: 340px;
    height: 50px;
    position: absolute;
    background: rgb(190, 190, 190);
    backface-visibility: hidden;
    border-radius: 8px;
}

#secondBehind {
    width: 340px;
    height: 50px;
    position: absolute;
    background: #fff;
    transform-origin: center;
    transform: rotate3d(1, 0, 0, -180deg);
    backface-visibility: hidden;
    border-radius: 8px;
    border: 1px dashed #d1d1d1;
    border-left: none;
    border-right: none;
}

#secondBehindDisplay {
    width: 100%;
    height: 50px;
    position: absolute;
    background: #fff;
    border-radius: 8px;
    border-bottom: 1px dashed #d1d1d1;
    display: flex;
    justify-content: space-between;
    padding: 10px 23px;
    box-shadow: 0px 11px 25px -1px rgba(0, 0, 0, 0.17);
}

#secondBehindBottom {
    width: 340px;
    height: 50px;
    position: absolute;
    background: #fff;
    transform-origin: center;
    transform: rotate3d(1, 0, 0, -180deg);
    backface-visibility: hidden;
    border-radius: 0px 0px 8px 8px;
    border-radius: 8px;
    box-shadow: 0px 11px 25px -1px rgba(0, 0, 0, 0.17);
}

#third {
    width: 340px;
    height: 50px;
    position: absolute;
    transform-origin: bottom;
    transform-style: preserve-3d;
    transition: 0.2s;
    border-radius: 8px;
}

#button {
    color: #2d2d2d;
    font-size: 19px;
    font-weight: bold;
    padding: 4px 80px;
    border: 1px solid #2d2d2d;
    background: #fff;
    border-radius: 4px;
    margin-top: 2px;
}

#price {
    color: #2d2d2d;
    font-weight: bold;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    margin-top: -2px;
}

#priceLabel {
    color: #747474;
    font-weight: 100;
    font-size: 10px;
    text-align: left;
}

#barCode {
    width: 98px;
    height: 30px;
}
`;

const nowDate = Date().toString().split(' ');


const Cell = (props)=> {

  const [active, handleActive] = useState(false);
	
  const [state, dispatch ] = useAppStateContext();

  async function handleReservation(e){
    
  e.preventDefault();
    await reservation(state, dispatch, e)
    .then((data) => dispatch({ type: "ADD_RESERVATION", value: data}))
  //  .then(()=> dispatch({type: 'SET_SUCCESS', value: true}))
  //  .then(()=> dispatch({type: 'SET_MESSAGE', value: 'Successfully Added Reservation'}))
  //  .then(()=> dispatch({type: 'TOGGLE_MESSAGE_CONTAINER', value: true}))
    .then(() => {
      document.location.replace("/confirmation");
  })
  .catch((err) => {
    console.log(err)
    dispatch({type: 'SET_SUCCESS', value: false})
    dispatch({type: 'SET_MESSAGE', value: 'There was an error adding the reservation to your account'})
    dispatch({type: 'TOGGLE_MESSAGE_CONTAINER', value: false})
    dispatch({type: 'TOGGLE_MESSAGE_CONTAINER', value: true})
    })
    
  }


  return (
    <Grid
      id="cardContainer"
      style={{
        height: active ? `300px` : `100px`,
        transition: "0.9s"
      }}
      onClick={() => {
        handleActive(!active);
      }}
    >
      <Container id="firstDisplay">
        <div id="flightDetail">
          <div
            id="detailLabel"
            style={{ fontWeight: "bold", color: props.label }}
          >
            From
          </div>
          {props.abbreviation}
          <div id="detailLabel">{ props.departure }</div>
        </div>
        <div
          id="flightDetail"
          style={{
            marginTop: "15px"
          }}
        >
          <div id="animContainer">
            <div id="anim">
              <div id="circle" />
              <div id="circle" />
              <div id="circle" />
            </div>
          </div>
          <div id="animContainer" style={{ left: "62px" }}>
            <div id="anim">
              <div id="circle" />
              <div id="circle" />
              <div id="circle" />
            </div>
          </div>
          <img
            style={{ width: "30px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUYRhP1VolmclJ-Sej6-9aAd77ZiGqdU4mw&usqp=CAU"
          />
        </div>
        <div id="flightDetail">
          <div
            id="detailLabel"
            style={{ fontWeight: "bold", color: props.label }}
          >
            To
          </div>
          MARS
        </div>
      </Container>
      <div
        id="first"
        style={{
          transform: active
            ? `rotate3d(1, 0, 0, -180deg)`
            : `rotate3d(1, 0, 0, 0deg)`,
          transitionDelay: active ? "0s" : "0.3s"
        }}
      >
        <Container id="firstTop">
          <img style={props.style} src={props.src} />
          <div id="timecontainer">
            <div id="detailDate">
            {props.abbreviation}
              <div id="detailTime">{props.boardingTime}</div>
              {`${nowDate[0]} ${nowDate[1]} ${nowDate[2]} ${nowDate[3]}`}
            </div>
            <img
              style={{
                width: "30px",
                height: "26px",
                marginTop: "22px",
                marginLeft: "16px",
                marginRight: "16px"
              }}
              src="https://github.com/pizza3/asset/blob/master/airplane2.png?raw=true"
            />
            <div id="detailDate">
              Mars
              <div id="detailTime">Sol 147</div>
              March 12 2022
            </div>
          </div>
        </Container>
        <Grid id="firstBehind">
          <div id="firstBehindDisplay">
            <div id="firstBehindRow">
              <div id="detail">
                300 Days
                <div id="detailLabel">Flight Time</div>
              </div>
              <div id="detail">
                No
                <div id="detailLabel">Transfer</div>
              </div>
            </div>
            <div id="firstBehindRow">
              <div id="detail">
                7200h
                <div id="detailLabel">Duration</div>
              </div>
              <div id="detail">
                {props.currentReservations}<div id="detailLabel">Gate</div>
              </div>
            </div>
            <div id="firstBehindRow">
              <div id="detail">
                {props.boardingTime}
                <div id="detailLabel">Boarding</div>
              </div>
              <div id="detail">
                {props.seatNumber}
                <div id="detailLabel">Seat</div>
              </div>
            </div>
          </div>
          <div
            id="second"
            style={{
              transform: active
                ? `rotate3d(1, 0, 0, -180deg)`
                : `rotate3d(1, 0, 0, 0deg)`,
              transitionDelay: active ? "0.2s" : "0.2s"
            }}
          >
            <div id="secondTop" />
            <div id="secondBehind">
              <div id="secondBehindDisplay">
                <div id="price">
                  {props.captain}
                  <div id="priceLabel">Captain</div>
                </div>
                <div id="price">
                  {props.seatingClass}
                  <div id="priceLabel">Class</div>
                </div>
                <img
                  id="barCode"
                  src="https://github.com/pizza3/asset/blob/master/barcode.png?raw=true"
                />
              </div>
              <div
                id="third"
                style={{
                  transform: active
                    ? `rotate3d(1, 0, 0, -180deg)`
                    : `rotate3d(1, 0, 0, 0deg)`,
                  transitionDelay: active ? "0.4s" : "0s"
                }}
              >
                <div id="thirdTop" />
                <div id="secondBehindBottom">
                  <Link to="/confirmation" style={{textDecoration: "none"}}>
                    <Button
                      id="button"
                      value={props.Id}
                      onClick={(e) => handleReservation(e)}
                      style={{
                        color: props.label,
                        border: `1px solid ${props.label}`
                      }}
                    >
                      Select
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    </Grid>
  );
}


const Header = (props) => {
  return (
  <Container>
    <div id="headerText">Select Flight</div>
    <div id="tripDetail">
      Your Trip
      <div id="tripDest">
        {props.abbreviation} - MARS<div id="oneWay">One Way</div>
        <div />
      </div>
      {`${nowDate[0]} ${nowDate[1]} ${nowDate[2]} ${nowDate[3]}`}
    </div>
    <svg
      id="settings"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <line
        x1="368"
        y1="128"
        x2="448"
        y2="128"
        style={{
          fill: "none",
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px"
        }}
      />
      <line
        x1="64"
        y1="128"
        x2="304"
        y2="128"
        style={{
          fill: "none",
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px"
        }}
      />
      <line
        x1="368"
        y1="384"
        x2="448"
        y2="384"
        style={{
          fill: "none",
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px"
        }}
      />
      <line
        x1="64"
        y1="384"
        x2="304"
        y2="384"
        style={{
          fill: "none",
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px"
        }}
      />
      <line
        x1="208"
        y1="256"
        x2="448"
        y2="256"
        style={{
          fill: "none",
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px"
        }}
      />
      <line
        x1="64"
        y1="256"
        x2="144"
        y2="256"
        style={{
          fill: "none",
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px"
        }}
      />
      <circle
        cx="336"
        cy="128"
        r="32"
        style={{
          fill: "none",
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px"
        }}
      />
      <circle
        cx="176"
        cy="256"
        r="32"
        style={{
          fill: "none",
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px"
        }}
      />
      <circle
        cx="336"
        cy="384"
        r="32"
        style={{
          fill: "none",
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px"
        }}
      />
    </svg>
  </Container>
  );
};

// const DataArr = Array(5)
//   .fill(0)
//   .map(Number.call, Number);
const Ticket = ({ flights }) => {
  console.log(flights)
  const [flightState, setFlightState] = useState([])

  // useEffect(() => {
  //   axios.get(`/api/booking`)
  //   .then(data => {
  //     const flights = data.data;
  //     setFlightState(flights);
  //     console.log(flights);
  //   })
  // },[])

  return (
    <FlightStyle>
      <div className="App">
        { flights.map((flight) => ( 
          <Header 
          abbreviation={flight.abbreviation}
          />
          ))}
        { flights.map((flight) => (
          <Cell 
          key={flight._id}
          Id={flight._id}
          abbreviation={flight.abbreviation}
          aircraftType={flight.aircraftType}
          seatingClass={flight.seatingClass}
          flightTime={flight.flightTime}
          boardingTime={flight.boardingTime}
          seatNumber={flight.seatNumber}
          currentReservations={flight.currentReservations}
          departure={flight.departure}
          arrival={flight.arrival}
          captain={flight.captain}
          src={flight.src}
          style={flight.style}
          label={flight.label}
          />
        ))}
      </div>
    </FlightStyle>
  );
}

export default Ticket;
