import React from 'react';
import backgroundVideo from '../assets/videos/background-video.mp4'; // Video për sfondin

function VideoBackground() {
  return (
    <div className="video-background">
      <video autoPlay muted loop id="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoBackground;
