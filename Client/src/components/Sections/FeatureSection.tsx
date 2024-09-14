import { featureHighlights } from "@/assets/dummyArrays";

const FeatureSection = () => {
  return (
    <section className=" space-y-20">
      {featureHighlights.map((feature) => (
        <div key={feature.id} className="flex gap-6">
          {feature.id % 2 !== 0 ? (
            //Image on the left
            <>
              <div className="flex justify-center items-center w-1/2">
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-3xl font-montserrat font-bold text-foreground">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-foreground mt-4">
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center w-1/2">
                <img
                  src={`Features${feature.image}`}
                  alt={feature.altText}
                  className="w-[85%] rounded-lg"
                />
              </div>
              {/* Description on the right  */}
            </>
          ) : (
            //Image on the right
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
                  <h2 className="text-3xl font-montserrat font-bold text-foreground">
                    {feature.title}
                  </h2>
                  <p className="text-lg font-inter text-foreground mt-4">
                    {feature.description}
                  </p>
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
