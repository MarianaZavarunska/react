import React, { useEffect, useState } from "react";

import { picturesService } from "../../services/pictures.service";

const Layout = ({ btnName }) => {
  const [picture, setPicture] = useState("cat");

  const generatePictures = (btnName) => {
    switch (btnName) {
      case "dog":
        picturesService.getDog().then((response) => {
          setPicture(URL.createObjectURL(response));
        });
        break;
      case "cat":
        picturesService
          .getCat()
          .then((response) => setPicture(URL.createObjectURL(response)));

        break;
      case "boy":
        picturesService
          .getBoy()
          .then((response) => setPicture(URL.createObjectURL(response)));
        break;
      case "nature":
        picturesService
          .getNature()
          .then((response) => setPicture(URL.createObjectURL(response)));
        break;
      case "notebook":
        picturesService
          .getNotebook()
          .then((response) => setPicture(URL.createObjectURL(response)));
        break;
      case "house":
        picturesService
          .getHouse()
          .then((response) => setPicture(URL.createObjectURL(response)));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    generatePictures(btnName);
  }, [btnName]);

  return (
    <div>
      <img src={picture} alt={btnName} />
      <button onClick={() => generatePictures(btnName)}>Update</button>
    </div>
  );
};

export default Layout;
