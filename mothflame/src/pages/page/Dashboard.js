import Dashboard from "Components/Dashboard/Dashboard";
import React from "react";

const ViewDashBoard = (props) => {
  const propsView = {
    name: "Andy",
  };

  return (
    <>
      <Dashboard name={propsView.name} />
    </>
  );
};

export default ViewDashBoard;
