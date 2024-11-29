import React from "react";
import DatePickerForVechicle from "../../components/datepicker/DatePicker";
import "./vechicleforrent.css";
import { Button } from "@mui/material";
export default function DateRangePicker({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) {
  return (
    <div className="daterangepicker-main">
      <div className="daterangepicker-container">
        <h3>select data</h3>
        <div className="daterangepicker-dates">
          <DatePickerForVechicle
            selectedDate={startDate}
            setSelectedDate={setStartDate}
            label="startDate"
          />
          <DatePickerForVechicle
            selectedDate={endDate}
            setSelectedDate={setEndDate}
            label="enddate"
          />
        </div>
        <Button variant="contained">Booked</Button>
      </div>
    </div>
  );
}
