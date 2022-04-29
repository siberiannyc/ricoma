import React from "react";
import close from "../media/white_close.svg";

export default function Modal({ setOpen }) {
  const closeHandler = () => {
    setOpen(false);
  };
  return (
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      className="z-[110] fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
    >
      <div class="relative w-full h-full max-w-2xl md:h-auto">
        <div class="relative w-screen h-screen bg-black flex flex-row justify-center items-center sm:bg-modal">
          <div className="relative">
            <div className="video-responsive w-[375px] h-[250px] flex justify-center items-center sm:w-[600px] sm:h-[420px]">
              <iframe
                width="90%"
                height="80%"
                src="https://www.youtube.com/embed/by8hsET0JEU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="sm:rounded-lg"
              ></iframe>
            </div>
            <button
              onClick={closeHandler}
              className="text-white absolute top-[0%] right-[5%] sm:top-[5%] right-[7%]"
            >
              <img
                src={close}
                alt="close button"
                className="w-[15px] h-[15px] sm:w-[10px] h-[10px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
