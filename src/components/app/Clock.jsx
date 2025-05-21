import React, {useState, useEffect} from "react";
import "./Clock.css";

const timezones = [
{ label: "UTC", value: "UTC" },
  { label: "Eastern Time (US & Canada)", value: "America/New_York" },
  { label: "Central European Time", value: "Europe/Berlin" },
  { label: "India Standard Time", value: "Asia/Kolkata" },
  { label: "East Africa Time", value: "Africa/Nairobi" },
]

export default function Clock () {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [timezone, setTimezone] = useState("Africa/Nairobi");

    useEffect (() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return ()=> clearInterval(interval);

    }, []);

const formatTimeInTimezone = () =>{
    const options ={
        timeZone: timezone,
        hour : "2-digit",
        minute: "2-digit",
        second: "2-digit",
        day: "numeric",
        weekday: "long",
        month: "long",
        year: "numeric",
        hour12: false,
    }
    return currentTime.toLocaleString("en-GB", options)
}
console.log(currentTime.toLocaleString);

return (
    <div className="main-container">
        <h2 className="title"> ⌚️ Live Clock</h2>
        <div className="clock-container">
            {formatTimeInTimezone().split(',')[0]}, 
                {formatTimeInTimezone().split(',')[2]},
        </div>
        <label for="timezone" className="timezone-label"> Select Timezone </label>
        <select 
        id="timezone"
        value={timezone}
        onChange={(e) => setTimezone(e.target.value)}
      >
        {timezones.map((tz) => (
          <option key={tz.value} value={tz.value}>
            {tz.label}
          </option>
        ))}
      </select>
    </div>
   
)
};