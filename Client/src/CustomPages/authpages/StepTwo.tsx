// components/StepTwo.tsx
import React from 'react';

interface StepProps {
  nextStep: () => void;
  prevStep: () => void;
  handleChange: (input: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: { interests: string; semester: string };
}

const StepTwo: React.FC<StepProps> = ({ nextStep, prevStep, handleChange, formData }) => {
  const continueStep = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={continueStep}>
      <h2 className="text-2xl font-bold mb-4">Step 2: Academic Information</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Interests</label>
        <input
          type="text"
          value={formData.interests}
          onChange={handleChange('interests')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., Coding, Sports"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Semester</label>
        <input
          type="text"
          value={formData.semester}
          onChange={handleChange('semester')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="py-2 px-4 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition duration-300"
        >
          Back
        </button>
        <button
          type="submit"
          className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default StepTwo;
