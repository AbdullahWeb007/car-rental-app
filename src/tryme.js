// import { height } from '@mui/system';
import React from 'react';

const Tryme = (props) => {
    const {image, image1, image2, image3,}= props;
  return (
    <div>
    usman
      <div style={{backgroundImage:{image}, height:"50%", width:"50%"}}></div>
      <div style={{backgroundImage:{image1}, height:"50%", width:"50%"}}></div>
      <div style={{backgroundImage:{image2}, height:"50%", width:"50%"}}></div>
      <div style={{backgroundImage:{image3}, height:"50%", width:"50%"}}></div>
    </div>
  );
}

export default Tryme;
