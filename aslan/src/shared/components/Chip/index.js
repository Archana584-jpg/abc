import React from "react";
const CustomChip = ({ text, suffix, handleClick, style }) => {
    return (
        <div
            style={{
                padding: "2px 2px 0px 2px",
                display: "flex",
                alignItems: "center",
                ...style,
            }}
        >
            <p
                onClick={handleClick}
                style={{
                    color: "#717988",
                    fontSize: 11,
                    marginBottom: 0,
                    padding: "2px 2px 0px 2px",
                    height: "auto",
                    borderRadius: 2,
                    width: "fit-content",
                    margin: 3,
                    borderColor: "#D3D3D3",
                    borderWidth: 1,
                    borderStyle: "solid",
                    verticalAlign: "center",
                    cursor: "pointer",
                    ...style,
                }}
            >
                {text} {suffix}
            </p>
        </div>
    );
};

export default CustomChip;
