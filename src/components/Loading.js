import "../App.css";
import ClipLoader from "react-spinners/ClipLoader";
import React, { useState } from "react";

function Loading() {
  return (
    <div className="loading-container">
      <div className="sweet-loading">
        <ClipLoader
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}
export default Loading;
