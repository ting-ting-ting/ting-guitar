import React from 'react';
import ReactPlayer from 'react-player/lazy';

const VideoPlayer = ({
  url,
}) => (
  <div className="video-player">
    <ReactPlayer url={url} />
  </div>
);

export default React.memo(VideoPlayer);
