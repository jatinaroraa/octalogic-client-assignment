import React, { useState } from "react";
import UserInfo from "../userinfo/UserInfo";
import VechicleForRent from "../vechicle/VechicleForRent";
import VechicleSelect from "../vechicle/VechicleSelect";
import RadioWithTitle from "../../components/radioButtons/radioWithTitle";
import DateRangePicker from "../vechicle/DateRangePicker";
import { getVechicleList } from "../../services/vechicle";

export default function Home() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const getList = async () => {
    let data = await getVechicleList();
    console.log(data.data, "datat");
  };
  getList();
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
          type={type}
          setType={setType}
          title="No of wheels"
          list={[{ label: "hello", value: "hel" }]}
          buttonTitle="Next"
          setStep={setStep}
          stepNumber={3}
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
          list={[{ label: "hello", value: "hel" }]}
          buttonTitle="Next"
          stepNumber={4}
        />
      ) : (
        ""
      )}
      {step == 4 ? (
        <RadioWithTitle
          type={type}
          setType={setType}
          setStep={setStep}
          title="Specific Model"
          list={[{ label: "hello", value: "hel" }]}
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
        />
      ) : (
        ""
      )}
      {step > 5 ? <h3>thank you booking confirmed</h3> : ""}
    </div>
  );
}
