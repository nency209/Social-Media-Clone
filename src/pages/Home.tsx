import { Link } from "react-router";



export const Home = () => {

   const features: string[] = [
  "Pulse your thoughts & photos",
  "Vibe with friends and creators",
  "Zync through real-time chat",
  "Join live moments & discussions",
  "React with likes, shares & comments",
  "Create or join interest-based Spaces",
  "Explore trending posts & voices",
  "Build your digital identity on Zynkly",
];


  interface WorkType {
    title: string;
    desc: string;
  }

  const Works: WorkType[] = [
  {
    title: "Pulse",
    desc: "Broadcast your moments through posts, images, or thoughts and stay at the heartbeat of Zynkly.",
  },
  {
    title: "Vibe",
    desc: "Connect and vibe with friends, creators, and like-minded explorers in your digital space.",
  },
  {
    title: "Zync",
    desc: "Experience seamless real-time chats with individuals or create buzzing group conversations.",
  },
  {
    title: "Explore",
    desc: "Dive into curated content, rising trends, and unique voices across the Zynkly universe.",
  },
  {
    title: "React",
    desc: "Like, comment, share, and spark conversations that matter — your engagement drives the community.",
  },
  {
    title: "Spaces",
    desc: "Create or join interactive lounges and interest-based zones where your passions thrive.",
  },
  {
    title: "Moments",
    desc: "Celebrate and engage in live events, virtual meetups, or spontaneous drops within your network.",
  }
]

  
  return (
    <>
    
   <div className="bg-gradient-to-r from-[#580A55] to-[#020202] text-white min-h-screen scroll-smooth">
        {/* Hero Section */}
        <section id="Home" className="grid grid-cols-2 lg:grid-cols-2 p-16">
          <div className="space-y-6">
            <h1 className="font-semibold text-5xl">Your Digital Social Lounge</h1>
            <p className="text-lg">
              Share your moments, connect with the community, and find your voice. 
              Welcome to Uni<span className="text-[var(--Louge-color)]">Lounge</span> — where connection meets creativity.
            </p>
            <button className="text-[var(--Louge-color)] bg-white px-6 py-2 rounded-full">
             <Link to={'/signup'}> Get Started</Link>
            </button>
          </div>

          <div className="flex justify-center items-center mt-10 lg:mt-0">
            <img src="/public/ChatGPT Image Jul 30, 2025, 10_46_48 AM.png"  className="max-w-xs object-contain" />
          </div>
        </section>

        {/* How it Works */}
        <section id="explore" className="relative bg-gradient-to-r from-[#580A55] to-[#020202] py-16 px-8 overflow-hidden">
          {[...Array(35)].map((_, i) => (
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
            What You Can Do on Uni<span className="text-[var(--Louge-color)]">Lounge</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 mt-12 relative z-10 px-16">
            {Works.map((item, i) => (
              <div
                key={i}
                className="bg-black bg-opacity-20 border-2 border-[var(--Louge-color)] p-4 rounded-lg"
              >
                <p className="font-semibold mb-2">
                  {i + 1}. {item.title}
                </p>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

    
        <section id="features" className="relative bg-gradient-to-r from-[#580A55] to-[#020202] py-16 px-8">
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
                opacity: 0.2,
                zIndex: 0,
              }}
            />
          ))}

          <h2 className="text-3xl font-semibold px-12 relative z-10">
            Key Features
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 mt-12 relative z-10">
            {features.map((text, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <img
                  src="/social.png"
                  alt="Feature"
                  className="rounded-full w-28 h-28 object-cover shadow-lg"
                />
                <p className="mt-4 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="py-16 text-center bg-gradient-to-r from-[#580A55] to-[#020202]">
          <h2 className="text-2xl md:text-3xl font-semibold px-4">
            Ready to build your social identity?
            <br />
            Join <span className="text-[var(--Louge-color)]">UniLounge</span> today.
          </h2>
          <button className="mt-6 bg-white text-[var(--Louge-color)] px-6 py-2 rounded-full font-medium">
             <Link to={'/signup'}>Create Account</Link>
          </button>
        </section>
      </div>
      
    </>
  );
};



