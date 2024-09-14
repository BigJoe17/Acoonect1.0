// components/StepTwo.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

interface StepProps {
  nextStep: () => void;
  prevStep: () => void;
  handleChange: (
    input: string
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: { interests: string; semester: string };
}

const StepTwo: React.FC<StepProps> = ({
  nextStep,
  prevStep,
  handleChange,
  formData,
}) => {
  const continueStep = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={continueStep}>
      <h2 className="text-2xl font-bold mb-4">Step 2: Academic Information</h2>
      <div className="mb-4 space-y-2">
        <Label className="block text-sm font-medium mb-1">Interests</Label>
        <Input
          type="text"
          value={formData.interests}
          onChange={handleChange("interests")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., Coding, Sports"
          required
        />
      </div>
      <div className="mb-4 spacey2">
        <Label className="block text-sm font-medium mb-1">Semester</Label>
        <Input
          type="text"
          value={formData.semester}
          onChange={handleChange("semester")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="flex w-1/2 mx-auto gap-4">
        <Button
          type="button"
          variant={"secondary"}
          onClick={prevStep}
          className="py-2 px-4 w-full rounded-md transition duration-300"
        >
          Back
        </Button>
        <Button
          type="submit"
          className="py-2 px-4 w-full rounded-md transition duration-300"
        >
          Next
        </Button>
      </div>
    </form>
  );
};

export default StepTwo;
