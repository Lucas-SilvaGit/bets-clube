import React from 'react';
import BlazeVideo from '../assets/videos/Blaze.mp4';

const VideoSection = () => {
  return (
    <div className='video-section'>
      <h2 className="skew-reset mt-4">BET´S CLUBE</h2>
      <div className='skew-reset'>
        <video controls>
          <source src={BlazeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <button className="button-test pulsating-button">Quero Testar Gratuitamente</button>
    </div>
  );
};

export default VideoSection