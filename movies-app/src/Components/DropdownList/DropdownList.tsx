import React, { FC } from "react";

const DropdownList: FC<{ genre: string }> = ({ genre }) => {
  return <option value={genre}>{genre}</option>;
};

export default DropdownList;
