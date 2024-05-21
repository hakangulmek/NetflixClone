import React from "react";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";

function Login() {
  return (
    <div className="">
      <div className="absolute w-full px-52 mt-80 h-[50px]">
        <div className=" relative  content-center text-center h-full w-full">
          <div className="">
            <span className="text-center font-black text-white text-opacity-100 text-5xl">
              Sınırsız film, dizi ve çok daha fazlası
            </span>
            <p className="text-center font-semibold text-white text-opacity-100 m-[16px] text-2xl">
              İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin.
            </p>
          </div>
          <div className="pt-6">
            <span className="text-center font-semibold text-white text-opacity-100  text-2xl">
              İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak
              için tek yapmanız gereken e-posta adresinizi girmek.
            </span>
          </div>
          <div className="w-full relative">
            <div className="flex mt-4 relative w-full">
              <input className="h-14 pl-4 rounded border-gray-950 w-full max-w-xl ml-40 peer" />
              <span className="absolute top-0 left-0 h-full flex items-center ml-6 pl-[152px] peer-focus:h-4 text-opacity-40 transition-all">
                E-posta adresi
              </span>
              <button className="flex bg-logo-color ml-3 w-44 rounded font-extrabold text-white text-xl relative p-4 max-h-14 items-center content-center">
                Başlayın
                <div className="flex relative right h-6 ml-4 mt-1 items-center content-center">
                  <TbArrowBigRightLinesFilled size={30} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
