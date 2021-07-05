import React from "react";
import $ from "jquery";
//Style
import styled from "styled-components";
//Components
import LoginBox from "./LoginBox";

const Background = () => {
  for (let i = 0; i < 500; i++) {
    let twinkle = Math.random() * 10 + 0.2;
    $(".space").append(
      `<div class="star"><div class="glow" style="animation: twinkle ${twinkle}s infinite alternate;"></div></div>`
    );
  }

  $(".space .star").each(function () {
    let top = Math.random() * $(window).height() - 20;
    let left = Math.random() * $(window).width() - 20;
    $(this).css("top", `${top}px`);
    $(this).css("left", `${left}px`);
  });

  return (
    <div>
      <StarStyle>
        <div className="space">
          <div className="star">
            <div className="glow"></div>
          </div>
        </div>
      </StarStyle>
      <LoginBox></LoginBox>
    </div>
  );
};

const StarStyle = styled.div`
  * {
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    margin: 0;
    background: #000;
  }
  .space {
    position: relative;
  }

  .space .star {
    position: absolute;
    padding: 20px;
    border-radius: 64px;
    background-color: none;
    display: flex;
    justify-items: center;
    align-content: center;
  }
  .space .star .glow {
    width: 2px;
    height: 2px;
    border-radius: 1px;
    transition: box-shadow 1s;
    z-index: -1;
  }
  .space .star:hover .glow {
    box-shadow: rgba(30, 255, 173, 0.5) 0px 0px 0 0,
      rgba(25, 213, 144, 0.5) 0px 0px 20px 20px,
      rgba(20, 170, 115, 0.5) 0px 0px 40px 40px,
      rgba(15, 128, 87, 0.5) 0px 0px 80px 80px,
      rgba(10, 85, 58, 0.5) 0px 0px 160px 160px,
      rgba(5, 43, 29, 0.5) 0px 0px 320px 320px,
      rgba(0, 0, 0, 0.5) 0px 0px 640px 640px;
    background-color: white;
    -webkit-animation: none !important;
    animation: none !important;
  }

  @-webkit-keyframes twinkle {
    0% {
      background-color: #000000;
    }
    100% {
      background-color: #ffffff;
    }
  }

  @keyframes twinkle {
    0% {
      background-color: #000000;
    }
    100% {
      background-color: #ffffff;
    }
  }
`;

export default Background;
