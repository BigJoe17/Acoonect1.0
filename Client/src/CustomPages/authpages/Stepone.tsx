// components/StepOne.tsx
import React from 'react';

interface StepProps {
  nextStep: () => void;
  handleChange: (input: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: { name: string; major: string };
}

const StepOne: React.FC<StepProps> = ({ nextStep, handleChange, formData }) => {
  const continueStep = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={continueStep}>
      <h2 className="text-2xl font-bold mb-4">Step 1: Basic Information</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={handleChange('name')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Major</label>
        <input
          type="text"
          value={formData.major}
          onChange={handleChange('major')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
      >
        Next
      </button>
    </form>
  );
};

export default StepOne;
