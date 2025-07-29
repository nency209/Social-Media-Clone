


export const Home = () => {

    const features: string[] = [
    "Post your moments",
    "Follow friends and creators",
    "Real-time chat",
    "Live event discussions",
    "React with likes & comments",
    "Join groups & communities",
    "Explore trending content",
    "Build your personal brand",
  ];

  interface WorkType {
    title: string;
    desc: string;
  }

  const Works: WorkType[] = [
    {
      title: "Post",
      desc: "Share your thoughts, photos, and moments with your community instantly.",
    },
    {
      title: "Connect",
      desc: "Follow your friends, meet new people, and grow your circle.",
    },
    {
      title: "Chat",
      desc: "Start real-time conversations with individuals or groups.",
    },
    {
      title: "Discover",
      desc: "Explore trending posts, hashtags, and creators in your niche.",
    },
    {
      title: "Engage",
      desc: "Like, comment, and interact with content that matters to you.",
    },
    {
      title: "Groups",
      desc: "Join or create interest-based communities and lounges.",
    },
    {
      title: "Events",
      desc: "Participate in digital meetups, discussions, and events.",
    },
  ];

  
  return (
    <>
    
      <div className="bg-gradient-to-r from-[#580A55] to-[#020202] text-white min-h-screen">
        {/* Hero Section */}
        <div className="grid grid-cols-2 lg:grid-cols-2 p-16">
          <div className="space-y-6">
            <h1 className="font-semibold text-5xl">Your Digital Social Lounge</h1>
            <p className="text-lg">
              Share your moments, connect with the community, and find your voice. 
              Welcome to Uni<span className="text-[var(--Louge-color)]">Lounge</span> — where connection meets creativity.
            </p>
            <button className="text-[var(--Louge-color)] bg-white px-6 py-2 rounded-full">
              Get Started
            </button>
          </div>

          <div className="flex justify-center items-center mt-10 lg:mt-0">
            <img src="/unilounge2 2.png" className="max-w-xs object-contain" />
          </div>
        </div>

        {/* How it Works */}
        <div className="relative bg-gradient-to-r from-[#580A55] to-[#020202] py-16 px-8 overflow-hidden">
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
        </div>

        {/* Features Grid */}
        <div className="relative bg-gradient-to-r from-[#580A55] to-[#020202] py-16 px-8">
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
        </div>

        {/* Final CTA */}
        <div className="py-16 text-center bg-gradient-to-r from-[#580A55] to-[#020202]">
          <h2 className="text-2xl md:text-3xl font-semibold px-4">
            Ready to build your social identity?
            <br />
            Join <span className="text-[var(--Louge-color)]">UniLounge</span> today.
          </h2>
          <button className="mt-6 bg-white text-[var(--Louge-color)] px-6 py-2 rounded-full font-medium">
            Create Account
          </button>
        </div>
      </div>
      
    </>
  );
};



