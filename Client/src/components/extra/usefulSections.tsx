export const UniversitySection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4">
      {[
        {
          name: "Stanford University",
          img: "0dcaf270-36c5-4db8-9280-277a598af9d9.png",
        },
        {
          name: "University of Michigan",
          img: "a506549e-869e-4dcd-b65d-15c1fa610885.png",
        },
        {
          name: "Harvard University",
          img: "5c2ec47e-6dc3-49c2-b49e-d48cb8f52625.png",
        },
        {
          name: "University of California, Berkeley",
          img: "3ef5fc5e-6d3e-4c29-b80a-03dd6196372e.png",
        },
        {
          name: "Yale University",
          img: "050d0c20-0186-4747-8ae3-82a9cd3fce76.png",
        },
        {
          name: "Massachusetts Institute of Technology",
          img: "1c8679ba-4e5a-49ee-93cc-25d52d936982.png",
        },
      ].map((university) => (
        <div className="flex flex-col gap-3 pb-3" key={university.name}>
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{
              backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/${university.img}")`,
            }}
          ></div>
          <p className="text-[#0e161b] text-base font-medium">
            {university.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export const postsArray = [
  {
    time: "10m • 2,000 views",
    title: "How to stay healthy in college",
    description:
      "Wellness is a crucial aspect of the student experience. This guide will cover everything from diet to mental health.",
    imgUrl:
      "https://cdn.usegalileo.ai/sdxl10/11aaa60a-b3d6-48ad-9550-8b0446b1f57d.png",
  },
  {
    time: "1h • 1,800 views",
    title: "The future of remote work",
    description:
      "As technology continues to advance, the way we work is evolving. What will the workplace look like in 10 years?",
    imgUrl:
      "https://cdn.usegalileo.ai/sdxl10/4041b172-5a7a-47f1-89f9-541e59b9ba6a.png",
  },
  {
    time: "3h • 1,500 views",
    title: "Study tips for acing your exams",
    description:
      "Exams can be stressful, but with the right approach, you can boost your performance and reduce anxiety.",
    imgUrl:
      "https://cdn.usegalileo.ai/stability/274cabac-1e47-4427-a667-f913d544d8eb.png",
  },
  {
    time: "5h • 1,200 views",
    title: "Navigating your first year of college",
    description:
      "Starting college is an exciting milestone, but it can also be overwhelming. Here are some tips to help you adjust and thrive.",
    imgUrl:
      "https://cdn.usegalileo.ai/sdxl10/37d9be0e-d745-4903-a354-c1420e6ce25c.png",
  },
  {
    time: "7h • 1,000 views",
    title: "The benefits of joining a student organization",
    description:
      "Getting involved in extracurricular activities can enhance your college experience and provide valuable skills for your future career.",
    imgUrl:
      "https://cdn.usegalileo.ai/sdxl10/22f30874-1ea2-4d9e-9b94-05af60447667.png",
  },
];

export const PostsSection = () => {
  return (
    <div>
      {postsArray.map((post, index) => (
        <div key={index} className="p-4">
          <div className="flex items-stretch justify-between gap-4 rounded-xl">
            <div className="flex flex-[2_2_0px] flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-[#49779c] text-sm font-normal leading-normal">
                  {post.time}
                </p>
                <p className="text-[#0d151c] text-base font-bold leading-tight">
                  {post.title}
                </p>
                <p className="text-[#49779c] text-sm font-normal leading-normal">
                  {post.description}
                </p>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#e7eef4] text-[#0d151c] text-sm font-medium leading-normal w-fit">
                <span className="truncate">Read More</span>
              </button>
            </div>
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
              style={{ backgroundImage: `url(${post.imgUrl})` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const imagesArray = [
  "https://cdn.usegalileo.ai/sdxl10/dc3123b6-1c61-4de6-8f69-480b5c731b16.png",
  "https://cdn.usegalileo.ai/stability/a9e5cd87-a9eb-4a64-bd7b-10d1781bd433.png",
  "https://cdn.usegalileo.ai/stability/64f2ed75-c7f8-434b-8c65-22567d930613.png",
  "https://cdn.usegalileo.ai/stability/0d6c5a1c-ce14-4793-b8b6-409dd4f7ad4a.png",
  "https://cdn.usegalileo.ai/sdxl10/88133977-dcf2-4dbb-bbd0-dbc86e883a02.png",
];

export const ImageSection = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:px-4 @[480px]:py-3">
                {/* First main image */}
                <div
                  className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-slate-50 @[480px]:rounded-xl min-h-[218px]"
                  style={{ backgroundImage: `url(${imagesArray[0]})` }}
                ></div>
              </div>
            </div>

            <h2 className="text-[#0d151c] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              Join the campus community at your fingertips
            </h2>
            <p className="text-[#0d151c] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
              Your all-in-one guide to campus life. Discover, connect, and grow
              with a network of students and alumni.
            </p>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {/* Map over the remaining images */}
              {imagesArray.slice(1).map((img, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url(${img})` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
