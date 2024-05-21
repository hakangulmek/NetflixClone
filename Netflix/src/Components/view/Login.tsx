import React from "react";

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
        </div>
      </div>
    </div>
  );
}

export default Login;
