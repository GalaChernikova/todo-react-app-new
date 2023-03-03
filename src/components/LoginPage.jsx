import { Fade } from "react-awesome-reveal";
import { FiArrowDown } from "react-icons/fi";
import RegisterForm from "./login/RegisterForm";
import LoginForm from "./login/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col bg-main min-h-screen bg-cover bg-no-repeat bg-center lg:p-10">
      <div className="m-auto pb-20 sm:mt-0">
        <Fade cascade damping={0.1}>
          <RegisterForm />
        </Fade>
        <Fade cascade damping={0.1}>
          <div className="w-80 mx-auto  mb-8 mt-5 flex flex-wrap items-center text-lg text-center text-red-50 sm:text-sm hover:text-red-100 sm:w-64">
            <p>Already have an account? Login now</p> {FiArrowDown()}
            
          </div>
        </Fade>
        <Fade cascade damping={0.1}>
          <LoginForm />
        </Fade>
      </div>
    </div>
  );
}
