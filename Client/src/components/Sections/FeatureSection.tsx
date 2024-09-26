import { revealLeft, revealRight } from "@/animations";
import { featureHighlights } from "@/assets/dummyArrays";
import { motion } from "framer-motion";

const FeatureSection = () => {
  return (
    <section className=" space-y-20">
      {featureHighlights.map((feature) => (
        <div key={feature.id} className="flex gap-6">
          {feature.id % 2 === 0 ? (
            //Image on the right
            <>
              <div className="flex justify-center items-center w-1/2">
                <div className="flex flex-col justify-center items-center">
                  <motion.h2
                    className="text-4xl font-montserrat font-extrabold text-[#222222] text-foreground"
                    variants={revealLeft(0)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-200px" }}
                  >
                    {feature.title}
                  </motion.h2>
                  <motion.p
                    className="text-lg text-foreground mt-4"
                    variants={revealLeft(0.25)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-200px" }}
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </div>
              <div className="flex justify-center items-center w-1/2">
                <img
                  src={`Features${feature.image}`}
                  alt={feature.altText}
                  className="w-[85%] rounded-lg"
                />
              </div>
            </>
          ) : (
            //Image on the left
            <>
              <div className="flex justify-center items-center w-1/2">
                <img
                  src={`Features${feature.image}`}
                  alt={feature.altText}
                  className="w-[85%] rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center w-1/2">
                <div className="flex flex-col justify-center items-center">
                  <motion.h2
                    className="text-3xl text-[#222222] font-montserrat font-extrabold text-foreground"
                    variants={revealRight(0)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-200px" }}
                  >
                    {feature.title}
                  </motion.h2>
                  <motion.p
                    className="text-lg font-inter text-foreground mt-4"
                    variants={revealRight(0.25)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-200px" }}
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default FeatureSection;
