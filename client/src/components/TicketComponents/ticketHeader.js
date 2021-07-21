import React, { useState, useEffect } from "react";
import { Container } from '@material-ui/core';
import axios from 'axios';
import { useAppStateContext } from '../../utils/GlobalContext';


const TicketHeader = (props) => {
    const nowDate = Date().toString().split(' ');
    const [state, dispatch ] = useAppStateContext();

    return (
        <Container>
            <div id="headerText">Select Flight</div>
            <div id="tripDetail">
                Your Trip
                <div id="tripDest">
                    { state.activeFlight.abbreviation } - MARS<div id="oneWay">One Way</div>
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

// const TicketData = ({ flights }) => {
//     const [flightState, setFlightState] = useState([])
//     // useEffect(() => {
//     //     axios.get(`/api/booking`)
//     //     .then(data => {
//     //     const flights = data.data;
//     //     setFlightState(flights);
//     //     console.log(flights);
//     // })
//     // },[])

//     return (
//         <div>
//             { flights.map((flight) => ( 
//                 <TicketHeader 
//                 abbreviation={flight.abbreviation}
//                 />
//                 ))}
//         </div>
//     )
// }

export default TicketHeader;