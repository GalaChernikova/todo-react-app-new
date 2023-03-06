import Nav from "../header/Nav";

export default function FriendsPage() {
  return (
    <div className="w-10/12 mx-auto mb-10 min-h-screen flex flex-col sm:w-full">
      <Nav />

      <div className="w-10/12 mx-auto font-main text-2xl text-stone-600 bg-white-bg rounded-2xl p-4 shadow-md">
        <h2 className="font-title mb-5">My Friends</h2>
      </div>
     
    </div>
  );
}
