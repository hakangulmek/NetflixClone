import React from "react";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";
import logo from "../netflix-img/images/logo.png";

function Navbar() {
  const [selected, setSelected] = useState("ES");
  const languages = {
    US: "ENGLISH",
    TR: "TURKISH",
    FR: "FRANCH",
    IT: "ITALY",
    ES: "SPANİSH",
  };

  return (
    <div className="">
      <div className="absolute w-full px-52 pt-8 bg-gradient-to-t from-slate-700">
        <div className="flex justify-between w-full h-[50px] pr-6 ">
          <img src={logo} alt="" />
          <div className="flex gap-x-2 h-6">
            <div className="w-full h-6 flex">
              <ReactFlagsSelect
                className="flag-select"
                countries={Object.keys(languages)}
                customLabels={languages}
                selected={selected}
                onSelect={(code) => setSelected(code)}
              />
            </div>
            <div className="rounded-lg bg-logo-color w-full ">
              <a className="text-xs font-serif p-6 text-white" href="#">
                OTURUM AÇ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
