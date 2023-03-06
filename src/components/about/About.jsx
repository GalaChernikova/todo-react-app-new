import Nav from "../header/Nav";
import aboutImg from "./../../images/about.png";

export default function About() {
  return (
    <div className="w-10/12 mx-auto mb-10 min-h-screen flex flex-col sm:w-full">
      <Nav />

      <div className="w-10/12 mx-auto font-main text-2xl text-stone-600 bg-white-bg rounded-2xl p-4 shadow-md">
        <h2 className="font-title mb-5 text-center">About</h2>

        <div className="flex items-center justify-evenly md:flex-col">
          <div>
            <img src={aboutImg} alt="about_img" className="sm:w-52"/>
          </div>
          <div className="">
            <p className="max-w-md mb-3 text-lg xl:text-base xl:max-w-sm md:w-full md:max-w-none">
              My name is Gala Chernikova and this is my example of the to-do
              React app, using MUI and Tailwind.
            </p>
            <p className="max-w-md mb-3 text-lg xl:text-base xl:max-w-sm md:w-full md:max-w-none">
              I use{" "}
              <a
                href="https://dummyjson.com/"
                className="underline font-medium"
              >
                DummyJSON API
              </a>
              , which allows to receive users, posts, comments data, etc. I also
              added login/register section and settings section.
            </p>
            <p className="max-w-md mb-3 text-lg xl:text-base xl:max-w-sm md:w-full md:max-w-none">
              Hope you're enjoy it! If you have any suggestions, please contact
              me{" "}
              <a
                href="mailto:galachcoding@gmail.com"
                className="underline font-medium"
              >
                galachcoding@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
