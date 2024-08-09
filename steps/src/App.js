import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    setStep((step) => step - 1);
    if (step <= 1) {
      return setStep(3);
    }
  }
  function handleNext() {
    setStep((step) => step + 1);
    if (step >= 3) {
      return setStep((step) => (step = 1));
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <StepMessage step={step}> {messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button textColor="#fff" bgColor="green" onClick={handlePrevious}>
              <span>👈 Previous</span>
            </Button>

            <Button textColor="#000" bgColor="violet" onClick={handleNext}>
              <span> Next 😊</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

function StepMessage({ step, children }) {
  return (
    <p className="message">
      <h3>
        {" "}
        Step {step} : {children}
      </h3>
    </p>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button>
      {" "}
      <button
        style={{ backgroundColor: bgColor, color: textColor }}
        onClick={onClick}
      >
        {children}
      </button>
    </button>
  );
}
