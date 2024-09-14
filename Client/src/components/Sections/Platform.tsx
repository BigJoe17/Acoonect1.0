import { Quote } from "lucide-react";
const PlatformSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#f1f1f1] to-white pt-20 flex justify-center relative">
      <Quote size={128} className="text-gray-800/45 absolute left-20 top-0" />
      <h1 className="text-6xl font-montserrat font-black text-gray-800 text-center max-w-[1024px]">
        A platform for Students by Students
      </h1>
    </div>
  );
};

export default PlatformSection;
