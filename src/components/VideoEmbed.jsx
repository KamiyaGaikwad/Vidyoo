import React from "react";
// import PropTypes from "prop-types";

export default function VideoEmbed({ embedId }){
    return(
      <div className="video-embed-yt-container">
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
  
  </div>
);}

// YoutubeEmbed.propTypes = {
//   embedId: PropTypes.string.isRequired
// };
