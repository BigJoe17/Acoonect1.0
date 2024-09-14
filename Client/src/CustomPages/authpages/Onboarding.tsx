// components/Onboarding.tsx
import React, { useState } from 'react';
import StepOne from './Stepone'
import StepTwo  from './StepTwo'
import StepThree from  './StepThree'

const Onboarding: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    major: '',
    interests: '',
    semester: '',
    bio: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-md">
        {/* Progress Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className={`h-2 w-1/3 ${step >= 1 ? 'bg-blue-600' : 'bg-gray-300'} transition-all duration-300`}></div>
          <div className={`h-2 w-1/3 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-300'} transition-all duration-300`}></div>
          <div className={`h-2 w-1/3 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-300'} transition-all duration-300`}></div>
        </div>

        {/* Form Steps */}
        {step === 1 && <StepOne nextStep={nextStep} handleChange={handleChange} formData={formData} />}
        {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />}
        {step === 3 && <StepThree prevStep={prevStep} formData={formData} />}
      </div>
    </div>
  );
};

export default Onboarding;
