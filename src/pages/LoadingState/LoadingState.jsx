import React from "react";

const LoadingState = ({text}) => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <h1 className="text-4xl">{text || "Loading..."}</h1>
    </div>
  );
};

export default LoadingState;
