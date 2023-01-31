import React, { useContext, useState } from "react";
import AppLoginContext from "../../components/AppLoginContext";
import { login } from "../../services/login";
import { useRouter } from "next/router";
import { routes } from "../../routes/routes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Login = () => {
  const [hide, setHide] = useState(true);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const loginContext = useContext(AppLoginContext);
  const router = useRouter();
  const handleLogin = async () => {
    const data = {
      username: username,
      password: password,
    };

    try {
      const loginResp = await login(data);
      if (loginResp.data.status === 400) {
        toast.error(loginResp?.data?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      } else {
        loginContext.setToken(loginResp.data.accessToken);
        loginContext.setIsLoggedIn(true);
        router.push(routes.dashboard);
      }
    } catch (err: any) {
      toast.error(err?.response?.data?.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="flex">
      <div className="bg-login bg-cover bg-no-repeat bg-center hidden md:flex md:w-1/2 h-screen">
        <div className="bg-black opacity-[0.6] h-full w-full">
          <Link href="/homepage">
            <img src="logo.svg" className="pt-10 md:pl-10 w-[250px] cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 h-screen w-full flex flex-col justify-center items-center relative px-8 md:px-0">
        <div className="top-10 left-5 md:hidden absolute">
          <Link href="/homepage">
            <img src="logoRemovebg.png" className="w-[160px] cursor-pointer" />
          </Link>
        </div>
        <div className="md:w-4/6">
          <p className="text-[40px] font-semibold font-hind">Login</p>
          <p className="text-primaryColor font-hind text-[20px] -mt-2">
            Enter the following details to Login
          </p>
          <div className="mt-4">
            <p className="mb-[5px] text-2xl font-medium font-hind">User Name</p>
            <input
              value={username}
              onChange={(e: any) => setUsername(e.target.value)}
              className="border border-[#00000066] font-hind h-10 focus:outline-none px-2 py-1 w-full rounded-[3px]"
            />
          </div>
          <div className="mt-4">
            <p className="mb-[5px] text-2xl font-medium font-hind">Password</p>
            <div className="border border-[#00000066] flex justify-between items-center pr-2 rounded-[3px]">
              <input
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                className="border-0 focus:outline-none py-1 pl-2 w-full h-10 font-hind"
                type={hide ? "password" : "text"}
              />
              {hide ? (
                <img
                  src="eye.svg"
                  onClick={() => setHide(false)}
                  className="w-5"
                />
              ) : (
                <img
                  src="eyeOff.svg"
                  onClick={() => setHide(true)}
                  className="w-5"
                />
              )}
            </div>
          </div>
          <button
            onClick={handleLogin}
            className="bg-[#25272A] font-hind text-primaryColor rounded-[3px] w-full mt-6 py-2 font-semibold text-[22px]"
          >
            LOGIN
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
