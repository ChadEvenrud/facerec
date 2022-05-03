import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <di className="center ma">
      <div className="absolute mt2">
        <img src={imageUrl} alt="" width="500px" height="auto" />
      </div>
    </di>
  );
};

export default FaceRecognition;
