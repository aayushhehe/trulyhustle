import React from "react";

const LoginPage = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="flex flex-col w-64 text-center gap-10 items-center">
        <h1 className="font-semibold text-4xl">Dive Right In</h1>
        <div className="flex gap-5 flex-col">
          <input
            type="text"
            placeholder="enter your email"
            className="px-4 py-2 border-2 rounded-2xl"
          />
          <input
            type="text"
            placeholder="enter password"
            className="px-4 py-2 border-2 rounded-2xl"
          />
        </div>

        <div className="px-4 py-2 bg-red-500 text-white w-max rounded-xl">
          Login
        </div>

        <div className="flex flex-col items-center gap-2">
          <h4>or sign in using</h4>
          <div className="flex items-center gap-2">
            <img
              src="https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png"
              alt=""
              className="w-8"
            />
            <img
              src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png"
              alt=""
              className="w-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
