import React from "react";

function days({ item }) {
  return (
    <>
      <div className="card">
        <div className="card-container">
          <h4 style={{ color: "white", fontWeight: "bold", fontSize: "30px" }}>
            <b>{item.date}</b>
          </h4>
          <img src={item.day.condition.icon} style={{ width: "70px" }} alt="" />
          <p style={{ color: "white", fontSize: "20px" }}>
            {item.day.avgtemp_c}°C
          </p>
          <p style={{ color: "white", fontSize: "20px" }}>
            {item.day.condition.text}
          </p>
        </div>
      </div>
    </>
  );
}

export default days;
