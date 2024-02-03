import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const tokk=useSelector(state=>state.auth.id);
    const nav=useNavigate();

    const handleEmailverify=async()=>{
        const res=await fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBLAYe2M0Gf_twVPGDmlWvNQpbMyvtkLYs",{
            method:"POST",
            body: JSON.stringify({
                idToken: tokk.token,
                requestType :"VERIFY_EMAIL"
            }),
            headers: {
                "Content-Type": "application/json;charset=utf-8",
              },
        })
        const data=await res.json();
        console.error(data.error.message);
    }

    const handleLogout=()=>{
        localStorage.removeItem("id");
        nav("/");
    }

  return (
    <>
      <div class="bg-white">
        <header class="absolute inset-x-0 top-0 z-50">
          <nav
            class="flex items-center border-1 justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div class="flex lg:flex-1">
              <a href="/home" class="-m-1.5 p-1.5">
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <div class="hidden lg:flex lg:gap-x-12">
              <Link to="/profile" class="block ml-2 mr-2 py-2 px-3 text-white bg-black-700  md:text-black-700 md:p-0 md:dark:text-blue-500">
                Profile
              </Link>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
              <Link to="/expense" class="block ml-2 mr-2 py-2 px-3 text-white bg-black-700 md:text-black-700 md:p-0 md:dark:text-blue-500">
                Expense
              </Link>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <button onClick={handleLogout}>
              <Link
                to="/"
                class="text-sm font-semibold leading-6 text-gray-900"
              >
                Log out <span aria-hidden="true">&rarr;</span>
              </Link>
              </button>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <div class="relative isolate px-6 pt-14 lg:px-8 text-center">
        <p class="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Welcome to Expense Tracker!!!
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Your profile is incomplete.{" "}
          <button>
            <Link to="/profile">Complete now</Link>
          </button>{" "}
        </p>
      </div>
      <div class="relative isolate px-6 pt-14 lg:px-8 text-center">
        <button
          class="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
          onClick={handleEmailverify}
        >
          <Link to="/profile">Verify Email</Link>
        </button>{" "}
      </div>
    </>
  );
};
export default Home;
