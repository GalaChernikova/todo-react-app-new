import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto md:w-full">
      <h2 className="font-title mb-5 text-2xl text-red-50">Login</h2>

      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        className="rounded-xl p-2 text-lg text-red-50 placeholder:text-red-50 placeholder:font-main mb-3 w-full border-red-50 outline-red-50 border-2 bg-transparent sm:text-sm"
      />
      <input
        type="password"
        placeholder="Title"
        {...register("Title", { required: true, max: 20, min: 8 })}
        className="rounded-xl p-2 text-lg text-red-50 placeholder:text-red-50 placeholder:font-main mb-3 w-full border-red-50 outline-red-50 border-2 bg-transparent sm:text-sm"
      />

      <button
        type="submit"
        className="text-xl font-main text-stone-600 border-red-50 bg-red-50 border-2 rounded-xl drop-shadow-xl py-2 px-10 w-40 mb-auto mx-auto hover:border-red-100 hover:bg-red-100 lg:text-lg sm:text-base"
      >
        Login
      </button>

      <NavLink
        to="/general"
        className="w-64 text-base font-main text-red-50 drop-shadow-xl py-4 px-10 mt-10 hover:text-red-100 lg:text-2xl sm:text-base sm:w-50 sm:p-2 ml-2"
      >
        <Fade cascade damping={0.1}>
          START &#8594;
        </Fade>
      </NavLink>
    </form>
  );
}
