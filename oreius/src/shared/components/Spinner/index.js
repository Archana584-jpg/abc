import { Spin } from "antd";
import React from "react";
import { useSelector } from "react-redux";

export const CustomSpinner = () => {
  const isLoaderVisible = useSelector((state) => state.loader.isLoaderVisible);
  return (
    <div>
      {isLoaderVisible ? (
        <div
          style={{
            position: "fixed",
            top: "0",
            bottom: "0",
            right: "0",
            left: "0",
            zIndex: "9999",
          }}
        >
          <Spin
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      ) : null}
    </div>
  );
};
