import { useState } from "react";

export default function App() {
  const [inputBill, setInputBill] = useState("");
  const [selectValue1, setSelectValue1] = useState(0);
  const [selectValue2, setSelectValue2] = useState(0);

  const clearAll = () => {
    setInputBill("");
    setSelectValue1(0);
    setSelectValue2(0);
  };

  const handleInputBill = (e) => {
    setInputBill(e.target.value);
  };
  const handleSelectValue1 = (e) => {
    setSelectValue1(e.target.value);
  };
  const handleSelectValue2 = (e) => {
    setSelectValue2(e.target.value);
  };

  return (
    <div>
      <InputBill inputBill={inputBill} handleInputBill={handleInputBill}>
        How much was the bill :{" "}
      </InputBill>
      <OptionBill
        text1="its was good 10%"
        text2="verygood 20%"
        text3="exilent 30%"
        value={selectValue1}
        handleSelectValue={handleSelectValue1}
      >
        How did you like the services ?
      </OptionBill>
      <OptionBill
        text1="its was good 10%"
        text2="verygood 20%"
        text3="exilent 30%"
        value={selectValue2}
        handleSelectValue={handleSelectValue2}
      >
        How did your friend like the servies ?
      </OptionBill>

      <Tip
        selectValue1={selectValue1}
        selectValue2={selectValue2}
        inputBill={inputBill}
      />
      <Button onClick={clearAll}>Clear</Button>
    </div>
  );
}

function OptionBill({
  children,
  text1,
  text2,
  text3,
  handleSelectValue,
  value,
}) {
  return (
    <div>
      <label>{children}</label>
      <select value={value} onChange={handleSelectValue}>
        <option value={0}></option>

        <option value={10}>{text1}</option>
        <option value={20}>{text2}</option>
        <option value={30}>{text3}</option>
      </select>
    </div>
  );
}

function InputBill({ children, inputBill, handleInputBill }) {
  return (
    <div>
      <label>{children}</label>
      <input type="number" value={inputBill} onChange={handleInputBill} />
    </div>
  );
}

function Tip({ selectValue1, selectValue2, inputBill }) {
  console.log("Selet Value 1", selectValue1);
  console.log("Select value 2", selectValue2);

  let tip = ((Number(selectValue1) + Number(selectValue2)) / 100) * inputBill;
  return (
    <h3>
      <span>{inputBill ? `You pay $${inputBill}` : ""}</span>{" "}
      <span>
        {(inputBill && selectValue1) || (inputBill && selectValue2)
          ? `($${inputBill} + $${tip} tip)`
          : ""}
      </span>
    </h3>
  );
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}
