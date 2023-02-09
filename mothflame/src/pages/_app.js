import '@/styles/globals.css'
import React from "react";

const AppComponent = ({ Component, PageProps }) => {
  return (
    <>
      <div className="container">
        <Component {...PageProps} />
      </div>
    </>
  );
};

export default AppComponent;
