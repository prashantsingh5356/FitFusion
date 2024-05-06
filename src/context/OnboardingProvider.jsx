import OnboardingContext from "./OnboardingContext";

import { useState } from "react";

const OnboardingProvider = (props) => {
  let [stepperVal, setStepperVal] = useState(0);

  const contextValue = {
    stepperValue: stepperVal,

    incrementStepperVal() {
      setStepperVal((prev) => prev + 1);
    },
    decrementStepperVal() {
      setStepperVal((prev) => prev - 1);
    },
  };

  return (
    <OnboardingContext.Provider value={contextValue}>
      {props.children}
    </OnboardingContext.Provider>
  );
};

export default OnboardingProvider;
