import { Link } from "react-router-dom";
import { imagesArray } from "@/components/extra/usefulSections";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import SectionHeader from "../extra/SectionHeader";

const motionLeft = {
  initial: {
    opacity: 0,
    x: "-100%",
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};
const motionRight = {
  initial: {
    opacity: 0,
    x: "+100%",
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const Heropage = () => {
  return (
    <div>
      <div className="bg-[#f1f1f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col justify-center relative ">
              {/* //Custom shape element for background behind element for color  */}
              <div className="absolute top-1/4 left-10 -translate-x-1/3 -translate-y-1/3  w-[50%] h-[40%] bg-gradient-to-bl from-green-600/60 to-blue-300/40 blur-lg rounded-shape"></div>
              <SectionHeader title="Welcome to Acoonect" type="primary" />
              <motion.h1
                className="text-4xl font-inter font-bold text-[var(--foreground)] z-10"
                variants={motionLeft as Variants}
                initial="initial"
                animate="animate"
                transition={{ duration: 1.5 }}
              >
                Connect, Collaborate, and Thrive in Your Academic Journey
              </motion.h1>
              <motion.p
                className="text-lg text-[#0e161b] mt-4 z-10"
                variants={motionLeft as Variants}
                initial="initial"
                animate="animate"
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                Acoonect brings together the best of professional networking and
                academic collaboration. Join study groups, share resources,
                showcase your projects, and build lasting connections with peers
                from your university and beyond
              </motion.p>
              <Link to="/login" className="mt-4 z-10">
                <Button variant="default" className="!px-8 !py-3">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="flex justify-start md:justify-center ">
              <motion.img
                variants={motionRight as Variants}
                initial="initial"
                animate="animate"
                transition={{ duration: 1.5 }}
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
