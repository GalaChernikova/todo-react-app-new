import { NavLink } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { FiCheckSquare, FiUserPlus, FiSmile } from "react-icons/fi";

export default function Main() {
  return (
    <div className="flex flex-col bg-main min-h-screen bg-cover bg-no-repeat bg-center">
      <h1 className="font-title text-9xl text-red-50 mx-auto drop-shadow-xl mb-24 mt-auto max-w-5xl w-full text-center lg:text-7xl lg:mb-16 md:text-5xl md:max-w-min sm:text-3xl sm:mb-10">
        <Fade cascade damping={0.1}>
          My TO-DO app
        </Fade>
      </h1>

      <div className="flex justify-between font-main text-red-50 drop-shadow-xl text-3xl max-w-4xl w-full mx-auto text-start mb-16  lg:max-w-lg lg:mb-12 lg:flex-col md:max-w-min md:text-start sm:text-base sm:w-72 sm:mb-8">
        <Fade cascade>
          <div className="flex lg:items-baseline">
            {FiCheckSquare()}
            <p className="w-56 ml-3 lg:w-96 lg:mb-10 sm:mb-5"> Make your own to-do list</p>
          </div>
          <div className="flex lg:items-baseline">
            {FiUserPlus()}
            <p className="w-56 ml-3 lg:w-96 lg:mb-10 sm:mb-5">
              Add friends and share your tasks
            </p>
          </div>
          <div className="flex lg:items-baseline">
            {FiSmile()}
            <p className="w-56 ml-3 lg:w-96 lg:mb-10 sm:mb-5">Share motivation</p>
          </div>
        </Fade>
      </div>

      <NavLink
        to="/general"
        className="text-4xl font-main text-red-50 border-red-50 border-2 rounded-3xl drop-shadow-xl py-4 px-10 mb-auto mx-auto hover:text-stone-600 hover:bg-red-50 lg:text-2xl sm:text-base"
      >
        <Fade cascade damping={0.1}>
          START &#8594;
        </Fade>
      </NavLink>
    </div>
  );
}
