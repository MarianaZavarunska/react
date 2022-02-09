import { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { getAllVideos } from "../../store/slices";
import Iframe from "../Iframe/Iframe";
import "./MovieVideos.css";

const MovieVideo: FC<{ movieId: number }> = ({ movieId }) => {
  const { videos } = useAppSelector((state) => state.videoReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllVideos(movieId));
  }, [movieId]);

  return (
    <div
      className="videos-container"
      //   style={{ display: "flex", flexWrap: "wrap" }}
    >
      {videos &&
        videos.map((video) => <Iframe key={video.id} videoKey={video.key} />)}
    </div>
  );
};

export { MovieVideo };
