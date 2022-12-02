import type { NextPage } from "next";
import Head from "next/head";

const Login: NextPage = () => {
  return (
    <>
      <form
        action=""
        className="mx-auto mt-10 container grid grid-rows-7 gap-5  "
      >
        
        <div className="mx-auto mt-10">
          <h1 className="text-3xl mt-10">SIGN IN</h1>
        </div>
        <div className="mx-auto my-3">
          <input
            type="text"
            className="login__input rounded-2xl w-96 h-10 pl-3 text-gray"
            placeholder="Email address"
          />
        </div>
        <div className="mx-auto ">
          <input
            type="text"
            className="login__input rounded-2xl w-96 h-10 pl-3 text-gray"
            placeholder="Password"
          />
        </div>
        <div className="mx-auto ">
          <button className="mx-auto mt-5 login__btn-primary h-12 w-48 rounded-xl">
            SIGN IN
          </button>
        </div>
        <div className="mx-auto  text-xs text-gray text-center opacity-60 cursor-pointer ">
          <a>Forgot Password?</a>
        </div>
        <div className="mx-auto ">
          <button className="login__btn-secondary  h-12 w-32 rounded-lg border-solid border border-sky-500">
            REGISTER
          </button>
        </div >
        <div className="mx-auto  text-xs text-gray text-center opacity-60">
          <p>
            Hanc ego assentior cum a philosophis complurribus
          </p>
          <p >permuita dicantur.</p>
        </div>
      </form>
    </>
  );
};

export default Login;
