import React from 'react';
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import "./style.css";
const { useState } = React;

const FlightStyle = styled.div`
  opacity: 0.9;
  position: absolute;
  top: 10%;
  left: 60%;
  margin-right: auto;
  margin-left: auto;
`;


const Flight = [
    {
        src: "https://afspacemuseum.org/wp-content/uploads/Cape-Canaveral-AFS-logo.png",
        style: {
        height: "51px",
        margin: "22px 12px"
        },
        label: "rgb(13, 28, 83)"
    },
    {
        src:
        "https://militarybase.net/wp-content/uploads/2019/02/Vandenberg-Air-Force-Base-California.png",
        style: {
        height: "46px",
        margin: "34px 16px"
        },
        label: "rgb(90, 5, 49)"
    },
    {
        src:
        "https://www.wallopsisland.org/wp-content/uploads/2016/06/747px-Nasa_Wallops_Flight_Facility_Insignia.svg.png",
        style: {
        height: "43px",
        margin: "31px 22px"
        },
        label: "rgb(230, 26, 56)"
    },
    {
        src:
        "https://p.kindpng.com/picc/s/474-4746211_spacex-falcon-9-spacex-logo-hd-png-download.png",
        style: {
        height: "46px",
        margin: "22px 20px"
        },
        label: "rgb(252, 178, 50)"
    },
    {
        src: "https://lh3.googleusercontent.com/proxy/m_YtB8mkGFxA25EUx5srzDmosCNxbcsAUlv1qLbvHYHkMlhampl8mcuW6ZessSRiN2O1433Y0qtzdi-Q1sDc-iESbl5PxQ-1QtAxmG7ILtq5",
        style: {
        height: "51px",
        margin: "22px 12px"
        },
        label: "rgb(13, 28, 83)"
    },
    {
        src:
        "https://beebom.com/wp-content/uploads/2015/02/airline-logos-qatar-e1424574584611.png",
        style: {
        height: "26px",
        margin: "34px 16px"
        },
        label: "rgb(90, 5, 49)"
    },
    {
        src:
        "https://beebom.com/wp-content/uploads/2015/02/airline-logos-swiss.png",
        style: {
        height: "23px",
        margin: "41px 12px"
        },
        label: "rgb(230, 26, 56)"
    },
    {
        src:
        "https://beebom.com/wp-content/uploads/2018/12/Singapore-Airlines-logo.jpg",
        style: {
        height: "46px",
        margin: "22px 15px"
        },
        label: "rgb(252, 178, 50)"
    }
];

const Cell = (props)=> {
  const { index } = props;
  const [active, handleActive] = useState(false);
	
  return (
    <div
      id="cardContainer"
      style={{
        height: active ? `300px` : `100px`,
        transition: "0.9s"
      }}
      onClick={() => {
        handleActive(!active);
      }}
    >
      <div id="firstDisplay">
        <div id="flightDetail">
          <div
            id="detailLabel"
            style={{ fontWeight: "bold", color: Flight[index].label }}
          >
            From
          </div>
          AFS
          <div id="detailLabel">Cape Canaveral Air Force Station</div>
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
            style={{ fontWeight: "bold", color: Flight[index].label }}
          >
            To
          </div>
          MARS
        </div>
      </div>
      <div
        id="first"
        style={{
          transform: active
            ? `rotate3d(1, 0, 0, -180deg)`
            : `rotate3d(1, 0, 0, 0deg)`,
          transitionDelay: active ? "0s" : "0.3s"
        }}
      >
        <div id="firstTop">
          <img style={Flight[index].style} src={Flight[index].src} />
          <div id="timecontainer">
            <div id="detailDate">
            Cape Canaveral
              <div id="detailTime">6:20</div>
              June 12 2021
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
        </div>
        <div id="firstBehind">
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
                8<div id="detailLabel">Gate</div>
              </div>
            </div>
            <div id="firstBehindRow">
              <div id="detail">
                5:35
                <div id="detailLabel">Boarding</div>
              </div>
              <div id="detail">
                20A
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
                  Michael
                  <div id="priceLabel">Captain</div>
                </div>
                <div id="price">
                  Economy
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
                  <Button
                    id="button"
                    style={{
                      color: Flight[index].label,
                      border: `1px solid ${Flight[index].label}`
                    }}
                  >
                    Select
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


const Header = (
  <div>
    <div id="headerText">Select Flight</div>
    <div id="tripDetail">
      Your Trip
      <div id="tripDest">
        KSC - MARS<div id="oneWay">One Way</div>
        <div />
      </div>
      12th June, 2020
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
  </div>
);

const DataArr = Array(5)
  .fill(0)
  .map(Number.call, Number);
const Ticket = () => {
  return (
    <FlightStyle>
      <div className="App">
        {Header}
        {DataArr.map((val, i) => (
          <Cell key={i} index={i} />
        ))}
      </div>
    </FlightStyle>
  );
}

export default Ticket;
