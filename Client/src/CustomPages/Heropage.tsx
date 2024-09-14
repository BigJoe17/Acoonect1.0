import { Link } from "react-router-dom";

const Heropage = () => {
  return (
    <div>
      <div className="bg-[#f1f1f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-[var(--foreground)]">
                The future of education is here
              </h1>
              <p className="text-lg text-[#0e161b] mt-4">
                Galileo is the all-in-one platform for students, educators, and
                institutions.
              </p>
              <div className="mt-6">
                <Link
                  to="/login"
                  className="bg-[#1e86ff] text-white px-6 py-3 rounded-md text-lg font-medium"
                >
                  Get started
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://cdn.usegalileo.ai/sdxl10/1c8679ba-4e5a-49ee-93cc-25d52d936982.png"
                alt="MIT"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heropage;
