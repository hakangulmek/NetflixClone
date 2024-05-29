import logo from "../netflix-img/images/logo.png";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useState, useRef, useEffect, useCallback } from "react";
import { FaRegBell } from "react-icons/fa6";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaPencilAlt } from "react-icons/fa";
import { LuSmilePlus } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";

function MainPageNavbar() {
  const [visibleInput, setVisibleInput] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (event: React.MouseEvent<SVGElement>) => {
    event.stopPropagation();
    setVisibleInput(true);
  };
  const handleClickOutside = useCallback((event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (inputRef.current && !inputRef.current.contains(target)) {
      setVisibleInput(false);
    }
  }, []);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);
  return (
    <div className="h-20 pl-2 flex">
      <div className="justify-between h-auto px-10 pt-6 flex">
        <div className="h-auto w-[680px] flex">
          <div className="w-32 h-8 mr-12">
            <img className="h-auto" src={logo} alt="" />
          </div>
          <div className="w-[600px]">
            <ul className="text-white flex gap-x-4 pt-1">
              <li>
                <NavLink to="/MainPAge">Ana Sayfa</NavLink>
              </li>
              <li>
                <NavLink to="">Diziler</NavLink>
              </li>
              <li>
                <NavLink to="">Filmler</NavLink>
              </li>
              <li>
                <NavLink to="">Yeni ve Popüler</NavLink>
              </li>
              <li>
                <NavLink to="">Listem</NavLink>
              </li>
              <li>
                <NavLink to="">Dile Göre Göz At</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-[700px] pt-[10px] p-4 pl-80">
          <div className="relative inline-block">
            {visibleInput ? (
              <input
                type="text"
                ref={inputRef}
                style={{ transform: "translateX(-100%)" }}
                className="border absolute left-0 border-gray-300 bg-slate-500 bg-opacity-15 text-white  rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400 caret-white "
              />
            ) : (
              <button className="pt-2">
                <BsSearch className="text-white" onClick={handleClick} />
              </button>
            )}
          </div>
          <div className="pl-6 ">
            <button className="">
              <h1 className="text-white font-sans text-xl ">Çocuk</h1>
            </button>
          </div>
          <div className="w-24 pl-6">
            <a href="">
              <FaRegBell size={30} className="text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex absolute left-[1050px] pt-8">
        <div className=" w-56 text-right text-white relative">
          <Menu as="nav" className={"relative inline-block text-left"}>
            <MenuButton
              as="div"
              className={
                "pb-2 pr-6 inline-flex w-full justify-center rounded-md bg-black/20 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
              }
            >
              <img
                src="https://occ-0-7292-1432.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
                alt=""
              />
            </MenuButton>
            <div className="">
              <MenuItems
                as="div"
                anchor="bottom"
                className={
                  "inline-flex w-42 rounded-md bg-slate-600 bg-opacity-15 pr-28 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 "
                }
              >
                <div className="px-1 py-1 relative w-full max-w-14">
                  <MenuItem>
                    <div className="flex  gap-x-12 ">
                      <a
                        className="flex  items-center rounded-md px-2 py-2 text-sm"
                        href="/settings"
                      >
                        Profil Yönetimi
                      </a>
                      <div className="flex items-center">
                        <FaPencilAlt
                          size={20}
                          className="flex items-center pl-1 "
                        />
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <div className="flex  gap-x-16 ">
                      <a
                        className="flex  items-center rounded-md px-2 py-2 text-sm"
                        href="/settings"
                      >
                        Profil Aktar
                      </a>
                      <div className="flex items-center">
                        <LuSmilePlus
                          size={30}
                          className="flex items-center pl-1 "
                        />
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <div className="flex  gap-x-16 ">
                      <a
                        className="flex  items-center rounded-md px-2 py-2 text-sm"
                        href="/settings"
                      >
                        Hesap
                      </a>
                      <div className="flex items-center">
                        <FaUser size={25} className="flex items-center pl-1 " />
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <div className="flex  gap-x-12 ">
                      <a
                        className="flex  items-center rounded-md px-2 py-2 text-sm"
                        href="/settings"
                      >
                        Yardım Merkezi
                      </a>
                      <div className="flex items-center">
                        <FaRegQuestionCircle
                          size={30}
                          className="flex items-center pl-1 "
                        />
                      </div>
                    </div>
                  </MenuItem>
                </div>
              </MenuItems>
            </div>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default MainPageNavbar;
