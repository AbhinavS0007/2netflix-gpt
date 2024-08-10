import React from "react";

const BackgroundVideo = (props) => {
  // Use props if needed, otherwise remove it
  // console.log(props);

  return (
    <div className="video-container">
      <iframe
        className="w-screen aspect-video  "
        src={
          "https://www.youtube.com/embed/XVenxyTh9yU?si=" +
          "0b2DTkipHdEMzMQZ" +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
