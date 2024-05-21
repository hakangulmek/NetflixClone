import React from "react";
import Navbar from "../Components/Navbar";

function LoginPage() {
  return (
    <div>
      <div className="p-[40px_0_40px_0] min-h-[600px]">
        <div className="h-full left-0 absolute top-0 w-full">
          <Navbar />
          <img
            className="h-full w-full "
            src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/29677322-822d-4cc4-a00b-e1d89807f678/TR-tr-20240513-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt=""
          />
          <div className="bg-gradient-to-t from from-gradient-stop absolute top-0 right-0 bottom-0 left-0"></div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
