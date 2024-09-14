// components/StepOne.tsx
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface StepProps {
  nextStep: () => void;
  handleChange: (
    input: string
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: { university: string; major: string };
}

const StepOne: React.FC<StepProps> = ({ nextStep, handleChange, formData }) => {
  const continueStep = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={continueStep}>
      <h2 className="text-2xl font-bold mb-4">Step 1: Basic Information</h2>
      <div className="mb-4 space-y-2">
        <Label className="block text-sm font-medium mb-1">
          University name
        </Label>
        <Input
          type="text"
          value={formData.university}
          onChange={handleChange("university")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4 space-y-2">
        <Label className="block text-sm font-medium mb-1">Major</Label>
        <Input
          type="text"
          value={formData.major}
          onChange={handleChange("major")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <Button
        type="submit"
        className="mt-4 w-full py-2 px-4 bg-gray-800 text-white rounded-md transition duration-300"
      >
        Next
      </Button>
    </form>
  );
};

export default StepOne;
