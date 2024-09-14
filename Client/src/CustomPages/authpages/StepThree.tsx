// components/StepThree.tsx
import React from "react";

interface StepProps {
  prevStep: () => void;
  formData: { bio: string };
}

const StepThree: React.FC<StepProps> = ({ prevStep, formData }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Final submission logic
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">
        Step 3: Additional Information
      </h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Bio</label>
        <textarea
          value={formData.bio}
          onChange={(e) => (formData.bio = e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          placeholder="Tell us a bit about yourself"
          rows={5}
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
          className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
        >
          Finish
        </button>
      </div>
    </form>
  );
};

export default StepThree;
