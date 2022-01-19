import React from "react";

import { Link } from "react-router-dom";

const User = (props) => {
  const { id, name } = props;
  return (
    <div>
      <h3>
        {id}. {name}
        <Link to={id + ""}></Link>
      </h3>
    </div>
  );
};

export default User;
