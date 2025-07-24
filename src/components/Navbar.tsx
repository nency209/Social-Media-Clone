import { Link } from "react-router";

export const Navbar = () => {
  return (
    <>
      <div className="bg-black text-white flex flex-wrap items-center justify-between  lg:py-2 lg:px-4 px-1 py-2">
        <div>
          <Link to={"/"} className="flex gap-2 text-lg col-span-1">
            <img
              src="/public/social-clone.png"
              className="w-8 rounded-full"
            ></img>
            <p>
              Uni
              <span className="text-[var(--Louge-color)] font-[var(--font-family)]">
                Lounge
              </span>
            </p>
          </Link>
        </div>

        <div className="lg:space-x-20  text-md md:space-x-4 lg:col-span-4 col-span-1 flex space-x-2  justify-center items-center">
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>About</Link>
          <Link to={"/"}>Roadmap</Link>
          <Link to={"/"}>Help</Link>
        </div>

        <div className="text-md flex justify-center md:justify-end w-full lg:justify-end lg:w-auto md:w-auto  lg:mt-0 md:mt-0  mt-4 col-span-1">
          <Link to={"/login"} className="border-r  py-2 px-4">
            Login
          </Link>
          <Link
            to={"/signin"}
            className="mx-4 px-4 py-2  text-center bg-[var(--Louge-color)] rounded-full"
          >
            Signup
          </Link>
        </div>
      </div>
    </>
  );
};
