import logo from "../netflix-img/images/logo.png";
import HeaderImg from "../netflix-img/images/header-image.png";
import { useNavigate } from "react-router-dom";
function LoginStart() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const handleLoginClick = () => {
    navigate("/MainPage");
  };
  return (
    <div>
      <div className="absolute w-full h-full">
        <img className="h-full w-full " src={HeaderImg} alt="" />
        <div className="bg-gradient-to-t from from-gradient-stop absolute top-0 right-0 bottom-0 left-0"></div>
      </div>
      <div className="absolute flex px-52 pt-8 w-full h-[82px]">
        <img className="" src={logo} onClick={handleClick} />
      </div>
      <div className="absolute ml-[360px] pl-48 mt-24 flex">
        <div className="bg-black opacity-45 w-[450px] h-[620px] max-h-[620px] rounded box-border"></div>
        <div className="px-12 py-16 h-[620px] absolute   ">
          <div className="h-16">
            <header className=" content-start font-mono font-bold h-16 ">
              <h1 className="text-3xl h-full  text-white text-opacity-100 ">
                Oturum Aç
              </h1>
            </header>
          </div>
          <div className="w-full h-80 grid gap-y-2">
            <form action="" className=" grid gap-y-1">
              <div>
                <input
                  className="w-full p-[8px_0_16px_8px] bg-black bg-opacity-55 absolute rounded border-gray-100 caret-white border-solid  outline-white peer"
                  type="text"
                />
                <span className=" text-white text-opacity-100 pl-2 visible text-sm flex pt-[10px] peer-focus:invisible">
                  E-posta veya cep telefonu numarası
                </span>
              </div>
              <div>
                <input
                  className="w-full p-[8px_0_16px_8px] bg-black bg-opacity-55 absolute rounded border-gray-100 caret-white border-solid  outline-white peer"
                  type="text"
                />
                <span className=" text-white text-opacity-100 pl-2 visible text-sm flex pt-[10px] peer-focus:invisible">
                  Parola
                </span>
              </div>
              <button className="w-full bg-logo-color absolute mt-40 p-2 rounded-sm">
                <a
                  onClick={handleLoginClick}
                  className="text-base font-bold font-serif p-6 text-white"
                >
                  Oturum Aç
                </a>
              </button>
              <span>
                <h1 className="text-white flex ml-36 mt-20 text-opacity-100 font-sans font-bold">
                  VEYA
                </h1>
              </span>
              <button className="w-full absolute bg-white bg-opacity-25 rounded-sm mt-64 h-10">
                <a className="text-base font-medium font-serif  text-white">
                  Oturum Açma Kodu Kullan
                </a>
              </button>
              <span>
                <h2 className="text-white absolute mt-4 ml-20 text-opacity-90 font-sans font-semibold">
                  Parolayı mı unuttunuz?
                </h2>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginStart;
