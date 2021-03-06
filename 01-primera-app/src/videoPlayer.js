/* import * as React from 'react';
import { useState, useEffect, useRef } from 'react';

import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';

interface PlayerProps {
  src: string;
  type: string;
}

const options = {
  fill: true,
  fluid: true,
  responsive: true,
  preload: 'auto',
  controls: true,
};

export const VideoPlayer = ({ src = '', type = 'video/mp4' }: PlayerProps) => {
  const videoRef = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const vjsPlayer = videojs(videoRef.current, options);
    setPlayer(vjsPlayer);

    return () => vjsPlayer.dispose();
  }, []);

  useEffect(() => {
    if (player !== null) {
      player.src({ src, type });
    }
  }, [src, type, player]);

  return (
    <div>

      <video ref={videoRef} className="video-js">
        <p className="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to
          a web browser that
          <a href="https://videojs.com/html5-video-support/">
            supports HTML5 video
          </a>
        </p>
      </video>
    </div>
  );
}; */

import '~video-react/dist/video-react.css';
import React from 'react';
import { Player } from 'video-react';

export default props => {
    return ( <
        Player playsInline poster = "/assets/poster.png"
        src = "http://localhost:8000/live/STREAM_NAME.flv" / >
    );
};