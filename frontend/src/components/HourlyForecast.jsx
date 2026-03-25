import { format } from "date-fns";
import React from "react";
import "./HourlyForecast.css";

const HourlyForecast = ({ data }) => {
  return (
    <div className="hourly-container card">
      {data.map((hour, index) => {
        const date = new Date(hour.time);
        const timeLabel = Number.isNaN(date.getTime())
          ? hour.time || "—"
          : format(date, "h a");

        return (
          <div className="hour-card" key={index}>
            <div className="hour-time">{timeLabel}</div>
            <img src={hour.condition.icon} alt="icon" className="hour-icon" />
            <div className="hour-temp">{Math.round(hour.temp_c)}°c</div>
            <div className="hour-rain">💧 {hour.chance_of_rain}%</div>
          </div>
        );
      })}
    </div>
  );
};

export default HourlyForecast;
