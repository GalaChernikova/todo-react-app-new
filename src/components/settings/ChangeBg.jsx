import "./settings.css";

export default function ChangeBg() {
  function handleColorClickDefault(e) {
    e.preventDefault();
    document.body.classList.toggle("bgDefault");
  }
  function handleColorClick1(e) {
    e.preventDefault();
    document.body.classList.toggle("bg_1");
  }

  function handleColorClick2(e) {
    e.preventDefault();
    document.body.classList.toggle("bg_2");
  }

  function handleColorClick3(e) {
    e.preventDefault();
    document.body.classList.toggle("bg_3");
  }

  function handleColorClick4(e) {
    e.preventDefault();
    document.body.classList.toggle("bg_4");
  }

  function handleColorClick5(e) {
    e.preventDefault();
    document.body.classList.toggle("bg_5");
  }

  function handleColorClick6(e) {
    e.preventDefault();
    document.body.classList.toggle("bg_6");
  }

  function handleColorClick7(e) {
    e.preventDefault();
    document.body.classList.toggle("bg_7");
  }

  return (
    <div className="p-4">
      <h2 className="font-title mb-5">Change background</h2>

      <div className="flex flex-wrap gap-5 sm:justify-center">
        <button
          id="buttonDefault"
          className="px-20 py-6 rounded-xl mb-5 shadow-md hover:border-stone-600 hover:border focus:border focus:border-stone-600 sm:p-8"
          onClick={handleColorClickDefault}
        ></button>
        <button
          id="button_1"
          className="px-20 py-6 rounded-xl mb-5 shadow-md hover:border-stone-600 hover:border focus:border focus:border-stone-600 sm:p-8"
          onClick={handleColorClick1}
        ></button>
        <button
          id="button_2"
          className="px-20 py-6 rounded-xl mb-5 shadow-md hover:border-stone-600 hover:border focus:border focus:border-stone-600 sm:p-8"
          onClick={handleColorClick2}
        ></button>
        <button
          id="button_3"
          className="px-20 py-6 rounded-xl mb-5 shadow-md hover:border-stone-600 hover:border focus:border focus:border-stone-600 sm:p-8"
          onClick={handleColorClick3}
        ></button>
        <button
          id="button_4"
          className="px-20 py-6 rounded-xl mb-5 shadow-md hover:border-stone-600 hover:border focus:border focus:border-stone-600 sm:p-8"
          onClick={handleColorClick4}
        ></button>
        <button
          id="button_5"
          className="px-20 py-6 rounded-xl mb-5 shadow-md hover:border-stone-600 hover:border focus:border focus:border-stone-600 sm:p-8"
          onClick={handleColorClick5}
        ></button>
        <button
          id="button_6"
          className="px-20 py-6 rounded-xl mb-5 shadow-md hover:border-stone-600 hover:border focus:border focus:border-stone-600 sm:p-8"
          onClick={handleColorClick6}
        ></button>
        <button
          id="button_7"
          className="px-20 py-6 rounded-xl mb-5 shadow-md hover:border-stone-600 hover:border focus:border focus:border-stone-600 sm:p-8"
          onClick={handleColorClick7}
        ></button>
      </div>
    </div>
  );
}
