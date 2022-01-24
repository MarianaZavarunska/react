import React from "react";

const Episode = ({ item }) => {
  const { name, episode, air_date } = item;
  return (
    <div className="episode-container">
      <h4>{name}</h4>
      <div>Episode: {episode}</div>
      <div>Air Date: {air_date}</div>
    </div>
  );
};

export default Episode;
