import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { FiX } from "react-icons/fi";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto md:w-full">
      <NavLink
        to="*"
      >
        <Fade cascade damping={0.1}>
          <p className="ml-auto text-3xl text-red-50 w-10 p-2">{FiX()}</p>
        </Fade>
      </NavLink>
      <h2 className="font-title mb-5 text-2xl text-red-50">Register</h2>

      <input
        type="text"
        placeholder="First name"
        {...register("First name", { required: true, maxLength: 80 })}
        className="rounded-xl p-2 text-lg text-red-50 placeholder:text-red-50 placeholder:font-main mb-3 w-full border-red-50 outline-red-50 border-2 bg-transparent sm:text-sm"
      />
      <input
        type="text"
        placeholder="Last name"
        {...register("Last name", { required: true, maxLength: 100 })}
        className="rounded-xl p-2 text-lg text-red-50 placeholder:text-red-50 placeholder:font-main mb-3 w-full border-red-50 outline-red-50 border-2 bg-transparent sm:text-sm"
      />
      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        className="rounded-xl p-2 text-lg text-red-50 placeholder:text-red-50 placeholder:font-main mb-3 w-full border-red-50 outline-red-50 border-2 bg-transparent sm:text-sm"
      />
      <input
        type="tel"
        placeholder="Mobile number"
        {...register("Mobile number", {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
        className="rounded-xl p-2 text-lg text-red-50 placeholder:text-red-50 placeholder:font-main mb-3 w-full border-red-50 outline-red-50 border-2 bg-transparent sm:text-sm"
      />
      <input
        type="password"
        placeholder="Password"
        {...register("Password", {})}
        className="rounded-xl p-2 text-lg  text-red-50 placeholder:text-red-50 placeholder:font-main mb-3 w-full border-red-50 outline-red-50 border-2 bg-transparent sm:text-sm"
      />


      <button
        type="submit"
        className="text-xl font-main text-stone-600 border-red-50 bg-red-50 border-2 rounded-xl drop-shadow-xl py-2 px-10 w-40 mb-auto mx-auto hover:border-red-100 hover:bg-red-100 lg:text-lg sm:text-base"
      >
        Register
      </button>
    </form>
  );
}
