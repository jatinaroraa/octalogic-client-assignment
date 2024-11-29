import React from "react";
import DatePickerForVechicle from "../../components/datepicker/DatePicker";
import "./vechicleforrent.css";
import { Button } from "@mui/material";
export default function DateRangePicker({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  datesFilter,
  booked,
  setStep,
  setNumber,
}) {
  const clicked = async () => {
    //clicked
    let res = await booked();
    if (res?.data) {
      //toastify
      setStep(setNumber);
      console.log("booked hurrahhhhh");
    }
  };
  return (
    <div className="daterangepicker-main">
      <div className="daterangepicker-container">
        <h3>select data</h3>
        <div className="daterangepicker-dates">
          <DatePickerForVechicle
            selectedDate={startDate}
            setSelectedDate={setStartDate}
            label="startDate"
            datesFilter={datesFilter.startDate}
          />
          <DatePickerForVechicle
            selectedDate={endDate}
            setSelectedDate={setEndDate}
            label="enddate"
            datesFilter={datesFilter.endDate}
          />
        </div>
        <Button variant="contained" onClick={clicked}>
          Booked
        </Button>
      </div>
    </div>
  );
}
