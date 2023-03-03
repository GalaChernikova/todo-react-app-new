import { useForm } from "react-hook-form";

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
      <h2 className="font-title mb-5 text-2xl text-stone-600">Login</h2>

      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        className="rounded-xl px-5 py-2 text-lg mb-3 w-full border-stone-600 border-2 bg-transparent sm:text-sm"
      />
      <input
        type="password"
        placeholder="Title"
        {...register("Title", { required: true, max: 20, min: 8 })}
        className="rounded-xl px-5 py-2 text-lg mb-3 w-full border-stone-600 border-2 bg-transparent sm:text-sm"
      />

      <button type="submit" className="text-lg bg-stone-600 rounded-xl text-white-bg drop-shadow-xl py-2 px-5 w-40 hover:bg-stone-800 sm:text-sm font-main">Login</button>
    </form>
  );
}
