import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Navbar: NextPage = () => {
  return (
    <>
      <div className="mx-auto  container-xl grid grid-rows-3 grid-flow-col border border-gray-800">
        <div className="navbar-item row-span-3 border-r border-gray-800">
          <img
            className="mx-auto w-24 "
            src="https://firebasestorage.googleapis.com/v0/b/prayut-rxltjj.appspot.com/o/Group.png?alt=media&token=19e2cb56-3fd5-4ba9-a9b2-8cafa5654366"
            alt=""
          />
        </div>
        <div className="p-4 navbar-item col-span-2 row-span-2 flex flex-row">
          <div className="basis-3/4  text-2xl text-red py-3">MARKETPLACE_</div>
          <div className="flex-initial w-64 "></div>
          <div>
            <button className="basis-1/4 login__btn-primary   h-10 w-28 rounded-xl">
              Back
            </button>
          </div>
        </div>
        <div className="navbar-item row-span-1 col-span-2 grid grid-cols-6 border-t text-center border-gray-800">
          <div className="py-2 col-start-1 border-r border-gray-800 text-gray cursor-pointer">
            NAKA MAKET
          </div>
          <div className="py-2 border-r border-gray-800 text-gray cursor-pointer">P2P MARKET</div>
          <div className="py-2 border-r border-gray-800 text-gray cursor-pointer">NAKAVERSE MAP</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
