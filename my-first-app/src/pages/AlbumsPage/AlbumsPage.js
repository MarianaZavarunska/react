import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Albums from "../../components/Albums/Albums";
import Service from "../../services/service";

const AlbumsPage = () => {
  const [albums, setAlbums] = useState([]);
  const { id } = useParams();
  console.log(useParams());

  useEffect(() => {
    let albumsService = new Service("users");

    albumsService.getAllAlbums(id).then((response) => setAlbums([...response]));
  }, [id]);
  return (
    <div className="user-albums-container">
      {albums && albums.map((album) => <Albums key={album.id} album={album} />)}

      <Outlet />
    </div>
  );
};

export default AlbumsPage;
