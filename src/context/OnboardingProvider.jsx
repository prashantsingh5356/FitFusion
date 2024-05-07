import OnboardingContext from "./OnboardingContext";

import { useState, useReducer } from "react";

const SignUpInitialValue = {
  company_email: "",
  company_password: "",
  confirm_company_password: "",
};

const signUpReducer = (state, action) => {
  switch (action.type) {
    case "companyEmail":
      return { ...state, company_email: action.data };

    case "companyPassword":
      return { ...state, company_password: action.data };

    case "confirmCompanyPassword":
      return { ...state, confirm_company_password: action.data };

    default:
      console.log("No such action found in signUpReducer", action.type);
      return state;
  }
};

const companyInitialValue = {
  admin_first_name: "",
  admin_last_name: "",
  company_name: "",
  company_contact_number: "",
  company_location: "",
  company_address: "",
};

const companyDataReducer = (state, action) => {
  switch (action.type) {
    case "adminFirstName":
      return { ...state, admin_first_name: action.data };
    case "adminLastName":
      return { ...state, admin_last_name: action.data };
    case "companyName":
      return { ...state, company_name: action.data };
    case "companyContactNumber":
      return { ...state, company_contact_number: action.data };
    case "companyLocation":
      return { ...state, company_location: action.data };
    case "companyAddress":
      return { ...state, company_address: action.data };

    default:
      break;
  }
};

const OnboardingProvider = (props) => {
  let [stepperVal, setStepperVal] = useState(0);

  const [signupData, dispatch] = useReducer(signUpReducer, SignUpInitialValue);
  const [companyData, dispatchCompanyData] = useReducer(
    companyDataReducer,
    companyInitialValue
  );

  const contextValue = {
    // Values
    // 0. Stepper value
    stepperValue: stepperVal,

    // 1. Sign Up values
    companyEmail: signupData.company_email,
    companyPassword: signupData.company_password,
    confirmCompanyPassword: signupData.confirm_company_password,

    // 2. Company values
    adminFirstName: companyData.admin_first_name,
    adminLastName: companyData.admin_last_name,
    companyName: companyData.company_name,
    companyContactNumber: companyData.company_contact_number,
    companyLocation: companyData.company_location,
    companyAddress: companyData.company_address,

    // Methods
    incrementStepperVal() {
      setStepperVal((prev) => prev + 1);
    },
    decrementStepperVal() {
      setStepperVal((prev) => prev - 1);
    },

    resetStepperVal() {
      setStepperVal(0);
    },

    checkValidInputForSignupStep() {
      //check if email and password is empty, if empty return false
      if (
        !this.companyEmail ||
        !this.companyPassword ||
        !this.confirmCompanyPassword
      )
        return false;

      //check if password and confirm password are same, if not same retun false
      if (!(this.companyPassword === this.confirmCompanyPassword)) return false;

      //companyEmail, companyPassword and confirmCompanyPassword is filled and password matches
      return true;
    },

    updateSignupData(action) {
      dispatch({ type: action.type, data: action.data });
    },

    checkValidInputForCompanyDataStep() {
      //check if all the input have value, if empty return false
      if (
        !this.adminFirstName ||
        !this.adminLastName ||
        !this.companyName ||
        !this.companyContactNumber ||
        !this.companyLocation
        // || !this.companyAddress
      )
        return false;
      //all the input fields are filled, return true
      return true;
    },

    updateCompanyData(action) {
      dispatchCompanyData({ type: action.type, data: action.data });
    },
  };

  return (
    <OnboardingContext.Provider value={contextValue}>
      {props.children}
    </OnboardingContext.Provider>
  );
};

export default OnboardingProvider;
