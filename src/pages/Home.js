import { Link } from "react-router-dom";
import Token from "../Store/TokenContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const tokk=useContext(Token);
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
            class="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div class="flex lg:flex-1">
              <a href="/home" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>
            <div class="flex lg:hidden">
              <button
                type="button"
                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
              <Link class="text-sm font-semibold leading-6 text-gray-900">
                Profile
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
