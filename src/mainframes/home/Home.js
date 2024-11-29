import React, { useEffect, useState } from "react";
import UserInfo from "../userinfo/UserInfo";
import VechicleForRent from "../vechicle/VechicleForRent";
import VechicleSelect from "../vechicle/VechicleSelect";
import RadioWithTitle from "../../components/radioButtons/radioWithTitle";
import DateRangePicker from "../vechicle/DateRangePicker";
import { getVechicleList } from "../../services/vechicle";
import { createBookingApi, getBookingDateApi } from "../../services/booking";

export default function Home() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  const [getBookingDates, setGetBookingDates] = useState({
    startDate: [],
    endDate: [],
  });
  const [type, setType] = useState("");
  const [wheels, setWheels] = useState(null);
  const [typeOfVechicles, setTypeOfVechicles] = useState([]);
  const [modelList, setModelList] = useState([]);
  const [model, setModel] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const wheelsList = [
    {
      label: "car",
      value: 4,
    },
    {
      label: "Bike",
      value: 2,
    },
  ];
  const getList = async () => {
    let data = await getVechicleList();
    console.log(data.data, "datat");
  };
  const getTypeOfVechicles = async () => {
    console.log(wheels, "wheels");
    let data = await getVechicleList(wheels);
    console.log(data.data, "type of vechicle");
    let types = {};
    let typelist = [];
    let list = data?.data?.data.map((item) => {
      if (!types[item.type]) {
        types[item.type] = 1;
        typelist.push({
          label: item.type,
          value: item.type,
        });
      }
      return item;
    });
    console.log(typelist, types, "typelist");
    setTypeOfVechicles(typelist);
  };
  const getWithType = async () => {
    let data = await getVechicleList(null, type);
    let list = data?.data?.data.map((x) => {
      return {
        label: x.name,
        value: x.id,
      };
    });
    setModelList(list);
  };
  const getBookingDateList = async () => {
    let list = await getBookingDateApi(model);
    let startDate = [];
    let endDate = [];
    let li = list?.data?.data.map((x) => {
      startDate.push(x.bookingStartDate);
      endDate.push(x.bookingEndDate);
      return x;
    });
    setGetBookingDates({ startDate: startDate, endDate: endDate });
  };
  const Booked = async () => {
    //
    let book = {
      userFirstName: name.firstName,
      userLastName: name.lastName,
      type: type,
      model: model,
      wheels: wheels,
      vechicleId: model,
      bookingStartDate: startDate,
      bookingEndDate: endDate,
    };
    let data = await createBookingApi(book);
    return data;
  };
  useEffect(() => {
    if (step == 1) getList();
    if (step == 3) {
      getTypeOfVechicles();
    }
    if (step == 4) {
      getWithType();
    }
    if (step == 5) {
      getBookingDateList();
    }
  }, [step]);
  const RenderComponent = () => {
    console.log(step, "step");
    switch (step) {
      case 1:
        return <UserInfo name={name} setName={setName} setStep={setStep} />;
      case 2:
        return (
          <VechicleForRent
            type={type}
            setType={setType}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            setStep={setStep}
          />
        );
      case 3:
        return (
          <VechicleSelect type={type} setType={setType} setStep={setStep} />
        );
      // case 4: return <UserInfo name={name} setName={setName} />
    }
  };
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      {/* {<RenderComponent />} */}
      {step == 1 ? (
        <UserInfo name={name} setName={setName} setStep={setStep} />
      ) : (
        ""
      )}
      {step == 2 ? (
        <RadioWithTitle
          type={wheels}
          setType={setWheels}
          title="No of wheels"
          list={wheelsList}
          buttonTitle="Next"
          setStep={setStep}
          stepNumber={3}
          // callFunction={typeOfVechicles}
        />
      ) : (
        ""
      )}
      {step == 3 ? (
        <RadioWithTitle
          type={type}
          setType={setType}
          setStep={setStep}
          title="Type of Vechicles"
          list={typeOfVechicles}
          buttonTitle="Next"
          stepNumber={4}
        />
      ) : (
        ""
      )}
      {step == 4 ? (
        <RadioWithTitle
          type={model}
          setType={setModel}
          setStep={setStep}
          title="Specific Model"
          list={modelList}
          buttonTitle="Booked"
          stepNumber={5}
        />
      ) : (
        ""
      )}
      {step == 5 ? (
        <DateRangePicker
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          datesFilter={getBookingDates}
          setStep={setStep}
          stepNumber={6}
          booked={Booked}
        />
      ) : (
        ""
      )}
      {step > 5 ? <h3>thank you booking confirmed</h3> : ""}
    </div>
  );
}
