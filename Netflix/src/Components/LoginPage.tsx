import Navbar from "../Components/Navbar";
import HeaderImg from "../netflix-img/images/header-image.png";
import Login from "./view/Login";

function LoginPage() {
  return (
    <div>
      <div className="p-[40px_0_40px_0] min-h-[600px]">
        <div className="h-full left-0 absolute top-0 w-full">
          <div className=" h-full absolute  w-full ">
            <img className="h-full w-full " src={HeaderImg} alt="" />
            <div className="bg-gradient-to-t from from-gradient-stop absolute top-0 right-0 bottom-0 left-0"></div>
          </div>
          <Navbar />
          <Login />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
