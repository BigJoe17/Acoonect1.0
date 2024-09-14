// components/Onboarding.tsx
import React, { useState } from "react";
import StepOne from "./Stepone";
import StepProgress from "./StepProgress";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

const Onboarding: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    major: "",
    interests: "",
    semester: "",
    bio: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange =
    (input: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [input]: e.target.value });
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
        {/* Custom Progress Bar */}
        <StepProgress step={step} />

        {/* Form Steps */}
        {step === 1 && (
          <StepOne
            nextStep={nextStep}
            handleChange={handleChange}
            formData={formData}
          />
        )}
        {step === 2 && (
          <StepTwo
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            formData={formData}
          />
        )}
        {step === 3 && <StepThree prevStep={prevStep} formData={formData} />}
      </div>
    </div>
  );
};

export default Onboarding;
