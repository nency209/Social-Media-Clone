import { Navbar } from "../components/Navbar";

export const Home = () => {
  const features:string[] = [
    "Sharing your life and work",
    "Communities",
    "Project opportunities",
    "Internships",
    "Advertising your efforts",
    "Meets , calls , and discussions",
    "Personal dashboard",
    "Collaborations",
  ];

  interface works
  {
    title:string,
    desc:string
  }

  const Works:works[]=
  [
    {title:'Connect',desc:'Forge meaningful relationships with peers and educators, fostering collaboration and growth.'},
     {title:'Create',desc:'generate innovative ideas and projects, fueling academic and personal development.'},
      {title:'Discover',desc:'Uncover a world of opportunities, from internships to cultural events, tailored to your interests and aspirations.'},
       {title:'Meet',desc:'Engage in interactions, foster connections and expand your network..'},
        {title:'Advertise',desc:'Showcase your events or opportunities to our engaged community, reaching a diverse audience of eager participants'},
         {title:'Collaborate',desc:'Forge meaningful relationships with peers and educators, fostering collaboration and growth.'},
          {title:'Interact',desc:'Create posts , join meets , collaborate and create projects , meet like minded individuals , and gain insight , knowledge , answers , or just have some fun!.'},
  ]
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-[#580A55] to-[#020202] h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-[2fr_1fr] ">
          <div className="text-white px-20 space-y-6 p-20">
            <p className="font-semibold text-4xl">
              Connect. Collaborate. Excel.
            </p>
            <p className="text-xl font-light">
              Connect with peers, share ideas, and unlock opportunities to excel
              in your journey.Whether you're seeking internships, cultural
              events, or simply looking to network with like-minded individuals,
              we've got you covered.
            </p>
            <button className="text-[var(--Louge-color)] bg-white px-6 py-2 rounded-full border border-[var(--Louge-color)]">
              Join for free
            </button>
          </div>

          <div className="w-full flex flex-col items-center  justify-center">
            <img
              src="/unilounge2 2.png"
              className=" max-w-xs object-contain"
              alt="Unilounge"
            />
            <p className="mb-18 text-white text-lg font-medium text-center">
              One <span className="text-[var(--Louge-color)]">Lounge</span> at a
              time
            </p>
          </div>
        </div>

          <div className="relative bg-gradient-to-r from-[#580A55] to-[#020202] text-white py-16 px-8 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-[var(--Louge-color)] rounded-full animate-float"
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.3,
                zIndex: 0,
              }}
            />
          ))}

          <h2 className="text-3xl font-semibold px-12 z-10 relative">
           How Uni<span className="text-[var(--Louge-color)]">Lounge</span> Works
           
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 mt-12 relative z-10 px-16">
            {Works.map((text, i) => (
              <div key={i} className=" bg-gradient-to-t from-[#580A55] to-[#020202] p-4 w-74 h-52 flex flex-col border-2 rounded-md border-[var(--Louge-color)]  ">
                <p>{i+1}.{text.title}</p>
                <p className="mt-4 text-sm">{text.desc}</p>
              </div>
            ))}
          </div>
        </div> 

        <div className="relative bg-gradient-to-r from-[#580A55] to-[#020202] text-white py-16 px-8 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-[var(--Louge-color)] rounded-full animate-float"
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.3,
                zIndex: 0,
              }}
            />
          ))}

          <h2 className="text-3xl font-semibold px-12 z-10 relative">
            Uni<span className="text-[var(--Louge-color)]">Lounge</span> helps
            you with
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 mt-12 relative z-10">
            {features.map((text, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <img
                  src="/public/social.png"
                  alt="Feature"
                  className="rounded-full w-28 h-28 object-cover shadow-lg"
                />
                <p className="mt-4 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative bg-gradient-to-r from-[#580A55] to-[#020202] text-white py-16 px-8 overflow-hidden">
          

          <h2 className="text-3xl font-semibold px-12 text-center">
           Join your friends , colleagues , classmates , and like minded individuals on UniLounge
          </h2>

          
        </div>

       
      </div>
    </>
  );
};
