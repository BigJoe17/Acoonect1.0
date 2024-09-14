// components/StepProgress.tsx
import { Progress } from "@/components/ui/progress";
import React from "react";

interface StepProgressProps {
  step: number;
}

const StepProgress: React.FC<StepProgressProps> = ({ step }) => {
  return (
    <div className="relative flex justify-between items-center mb-6 ">
      <Progress
        value={step * 33.33}
        max={100}
        className="w-full h-2 bg-gray-200 rounded-full"
      />
    </div>
  );
};

export default StepProgress;
