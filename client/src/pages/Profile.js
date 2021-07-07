import React from "react";
import styled from "styled-components";


const ProfileStyle = styled.div`
    color: blue;
    font-size: 150px;
    
.text{
    display: flex;
    justify-content: center;
}
`;

const Profile = () => {
  return (
      <ProfileStyle>
          <div className="text">
          <h1>Hello Tak</h1>
          </div>
      </ProfileStyle>
  )
};

export default Profile;