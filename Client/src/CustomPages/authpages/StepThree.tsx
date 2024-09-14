// components/StepThree.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface StepProps {
  prevStep: () => void;
  handleChange: (
    input: string
  ) => (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  formData: { bio: string };
}

const StepThree: React.FC<StepProps> = ({
  prevStep,
  handleChange,
  formData,
}) => {
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
      <div className="mb-4 space-y-2">
        <Label className="block text-sm font-medium mb-1">Bio</Label>
        <Textarea
          value={formData.bio}
          onChange={handleChange("bio")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          placeholder="Tell us a bit about yourself"
          rows={5}
        />
      </div>
      <div className="flex w-1/2 mx-auto gap-4">
        <Button
          type="button"
          variant="secondary"
          onClick={prevStep}
          className="py-2 px-4 w-full rounded-md transition duration-300"
        >
          Back
        </Button>
        <Button
          type="submit"
          className="py-2 px-4 w-full rounded-md transition duration-300 bg-green-800 hover:bg-green-900"
        >
          Finish
        </Button>
      </div>
    </form>
  );
};

export default StepThree;
