import React, { useEffect, useState } from "react";

import { picturesService } from "../../services/pictures.service";

const Layout = ({ btnName }) => {
  const [picture, setPicture] = useState("cat");

  useEffect(() => {
    switch (btnName) {
      case "dog":
        picturesService
          .getDog()
          .then((response) => {
            console.log(response);
          })
          .catch(err) => {
            if (typeof error.response === 'undefined') {
                window.location = 'https://login.microsoftonline.com'
              } else {
                  console.log(response)
          }
        break;
      case "cat":
        picturesService.getCat().then((response) => console.log(response));
        break;
      case "boy":
        picturesService.getBoy().then((response) => console.log(response));
        break;
      case "nature":
        picturesService.getNature().then((response) => console.log(response));
        break;
      case "notebook":
        picturesService.getNotebook().then((response) => console.log(response));
        break;
      case "house":
        picturesService.getHouse().then((response) => console.log(response));
        break;
      default:
        break;
    }
  }, [btnName]);

  return (
    <div className="img-container">
      <img src={picture} alt={btnName} />
    </div>
  );
};

export default Layout;
