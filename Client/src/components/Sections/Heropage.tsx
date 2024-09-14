import { Link } from "react-router-dom";
import { imagesArray } from "@/components/extra/usefulSections";
import { Button } from "@/components/ui/button";

const Heropage = () => {
  return (
    <div>
      <div className="bg-[#f1f1f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col justify-center ">
              <h1 className="text-4xl font-inter font-bold text-[var(--foreground)]">
                Connect, Collaborate, and Thrive in Your Academic Journey
              </h1>
              <p className="text-lg text-[#0e161b] mt-4">
                Acoonect brings together the best of professional networking and
                academic collaboration. Join study groups, share resources,
                showcase your projects, and build lasting connections with peers
                from your university and beyond
              </p>
              <Link to="/login" className="mt-4">
                <Button variant="default" className="!px-8 !py-3">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="flex justify-start md:justify-center ">
              <img
                src={imagesArray[0]}
                alt="MIT"
                className="w-full md:w-[80%] rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heropage;
