import React, { useState, useEffect } from "react";
import "./Clock.css";

const timezones = [
  { label: "UTC", value: "UTC" },
  { label: "Eastern Time (US & Canada)", value: "America/New_York" },
  { label: "Central European Time", value: "Europe/Berlin" },
  { label: "India Standard Time", value: "Asia/Kolkata" },
  { label: "East Africa Time", value: "Africa/Nairobi" },
  {label:"Australian Eastern Standard Time", value: "Australia/Sydney"},
  { label: "Pacific Time (US & Canada)", value: "America/Los_Angeles" },
  { label: "Mountain Time (US & Canada)", value: "America/Denver" },
  { label: "Greenwich Mean Time", value: "GMT" },
  { label: "Japan Standard Time", value: "Asia/Tokyo" },
  { label: "China Standard Time", value: "Asia/Shanghai" },
  { label: "Brasilia Time", value: "America/Sao_Paulo" }
];

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timezone, setTimezone] = useState("Africa/Nairobi");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleTimezoneChange = (e) => {
    setTimezone(e.target.value);
  };

  const formatTimeInTimezone = () => {
    const options = {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return currentTime.toLocaleString("en-GB", options);
  };

  const formatted = formatTimeInTimezone().split(",");
  const time = formatted[1]?.trim().split(" ").slice(0, 2).join(" ")
  const date = `${formatted[0] || ""}, ${formatted[2] || ""}`;

  const sortedTimezones = [...timezones].sort((a, b) => a.label.localeCompare(b.label));

  return (
    <div className="container">
    <div className="clock-card">
        <h1 className="title">⌚Live Clock</h1>
    <div className="time-display">
          <div className="time">{time}</div>


      <div className="date">{date}</div>
        </div>
        <div className="selector-container">
          <label className="label" htmlFor="timezone">


            Select Timezone:
          </label>
          <select
            id="timezone"
            value={timezone}
            onChange={handleTimezoneChange}
            className="select"
          >
            {sortedTimezones.map((tz) => (
              <option key={tz.value} value={tz.value}>


                {tz.label}
              </option>
            ))}
          </select>


        </div>
        <div className="timezone-display">


          Current timezone: <span className="timezone-value">{timezone}</span>

          
        </div>
      </div>
    </div>
  );
}
