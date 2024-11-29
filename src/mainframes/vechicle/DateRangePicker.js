import React from "react";
import DatePickerForVechicle from "../../components/datepicker/DatePicker";
import "./vechicleforrent.css";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
export default function DateRangePicker({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  datesFilter,
  booked,
  setStep,
  stepNumber,
}) {
  const clicked = async () => {
    //clicked
    if (!startDate && !endDate) {
      return toast.error("Select both dates to confirm!");
    }
    let res = await booked();
    if (res?.data) {
      //toastify
      toast.success("Booking confirmed!");
      setStep(stepNumber);
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
