import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Logo from "../public/img/logo.svg"
import pointer from "../public/img/pointer.svg"
const Navbar: NextPage = () => {
  return (
    <>
      <div className="mx-auto  container-xl grid grid-rows-3 grid-flow-col border border-gray-800">
        <div className="navbar-item row-span-3 border-r border-gray-800 ">
          <Image  width={148} className="mx-auto pb-2" src={Logo} alt="logo"></Image>
        </div>
        <div className="p-4 navbar-item col-span-2 row-span-2 flex flex-row">
          <div className="basis-3/4 text-2xl text-red pt-5 pl-5">MARKETPLACE_</div>
          <div className="flex-initial w-24 "></div>

          
          <Image className="h-7 mt-2 mr-5" src={pointer}  alt="pointer"></Image>
          <button className="text-xs login__btn-primary  h-12 w-36  rounded-xl">
            Back
          </button>
        </div>
        <div className="navbar-item menu_bar row-span-1 col-span-2  grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border-t text-center border-gray-800 ">
          <div className="py-4 col-start-1 border-r border-gray-800 text-sm text-gray cursor-pointer">
            NAKA MAKET
          </div>
          <div className="py-4 border-r border-gray-800 text-sm text-gray cursor-pointer">
            P2P MARKET
          </div>
          <div className="py-4 border-r border-gray-800 text-sm text-gray cursor-pointer">
            NAKAVERSE MAP
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
