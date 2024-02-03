import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import authActions from "../../Redux/Slice/expense";


const Forms = () => {
  const navigate=useNavigate();

  const dispatch=useDispatch();

  const [sign, setSign] = useState(false);

  const email_id = useRef(null);
  const pass = useRef(null);
  const conpass = useRef(null);

  const handlesignup = async (e) => {
    e.preventDefault();
    const obj = {
      email: email_id.current.value,
      password: pass.current.value,
      confrimpass: conpass.current.value,
    };
    await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBLAYe2M0Gf_twVPGDmlWvNQpbMyvtkLYs",
      {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    );
    setSign(true);
  };

  const handleclick=()=>{
    setSign((o)=>!o);
  }

  const handlesignin = async (e) => {
    e.preventDefault();

    const res=await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBLAYe2M0Gf_twVPGDmlWvNQpbMyvtkLYs",
      {
        method: "POST",
        body: JSON.stringify({
          email: email_id.current.value,
          password: pass.current.value,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    );
    const data=await res.json();
    const token=data.idToken;
    console.log(token);
    dispatch(authActions.login(token));
    localStorage.setItem("id",token);
    navigate("/home");
  };
  const handleforgotpassword=()=>{
    navigate("/forgot");
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          {sign ? (<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log In
          </h2>):(<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up
          </h2>)}
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  ref={email_id}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  ref={pass}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {sign ? (<p></p>):(<div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirm-password"
                  name="password"
                  type="password"
                  ref={conpass}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>)}
            <div>
              {sign? (
                <>
              <button
                type="submit"
                onClick={handlesignin}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log In
              </button>
              <button onClick={handleforgotpassword}> Forgot Password ?</button>
              </>
              ): (
              <button
                type="submit"
                onClick={handlesignup}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
              )}
              {sign ? (<p></p>): (<p className="mt-10 text-center text-sm text-gray-500">
              Already a member?{" "}
              <button onClick={handleclick}> Log In
              </button>
            </p>)}
            {!sign ? (<p></p>): (<p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{" "}
              <button onClick={handleclick}> Sign up
              </button>
            </p>)}
            </div>
          </form>

          
        </div>
      </div>
    </>
  );
};

export default Forms;
