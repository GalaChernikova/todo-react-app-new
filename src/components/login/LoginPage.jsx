import Nav from "./../header/Nav";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { FiArrowDown } from "react-icons/fi";

export default function LoginPage() {
  return (
    <div className="w-10/12 mx-auto mb-10 min-h-screen flex flex-col sm:w-full">
      <Nav />

      <div className="flex flex-col gap-5 w-10/12 mx-auto justify-between lg:flex-col lg:justify-center font-main text-2xl text-stone-600 bg-white-bg rounded-2xl px-4 py-6 pb-20 drop-shadow-md">
        <RegisterForm />
        <p className="mb-8 mx-auto flex flex-wrap items-center text-lg sm:text-sm">Already have an account? Login now {FiArrowDown()}</p>
        <LoginForm />
      </div>
      
    </div>
  );
}
