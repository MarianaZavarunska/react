import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Service from "../../services/service";
import Photo from "../../components/Photos/Photo";
import "../../components/Users/Users.css";

const PhotosPage = () => {
  const [photos, setPhotos] = useState([]);
  const { albumsId } = useParams();

  useEffect(() => {
    let photosService = new Service("photos");

    photosService
      .getAllPhotos(albumsId)
      .then((response) => setPhotos([...response]));
  }, [albumsId]);

  return (
    <div className="photos-container">
      {photos && photos.map((photo) => <Photo key={photo.id} photo={photo} />)}
    </div>
  );
};

export default PhotosPage;
