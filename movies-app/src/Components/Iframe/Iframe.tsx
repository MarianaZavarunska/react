import { FC } from "react";

import "./Iframe.css";

let videoUrl;

const Iframe: FC<{ videoKey: string }> = ({ videoKey }) => {
  //   videoUrl = `https://www.youtube.com/watch?v=${videoKey}`;

  videoUrl = `https://www.youtube.com/embed/${videoKey}`;

  return (
    <div>
      <iframe
        src={videoUrl}
        // frameborder="0"
        allow="autoplay; encrypted-media"
        title="video"
        className="video-container"
        // style={{ width: "400px" }}
      />
    </div>
  );
};

export default Iframe;
