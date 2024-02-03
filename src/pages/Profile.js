import { useEffect, useRef, useState } from "react";
import {useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const[n, setName]=useState(null);
  const[url,setUrl]=useState(null);

  const Dname = useRef(null);
  const photo = useRef(null);

  const navigate=useNavigate();

  const tokid=useSelector(state=>state.auth.id);

  useEffect( ()=>{
    const fetching= async ()=>{
        const result= await fetch("https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBLAYe2M0Gf_twVPGDmlWvNQpbMyvtkLYs",
        {
            method:"POST",
            body: JSON.stringify({
                idToken: tokid
            })
        });
        const data=await result.json();
        setName(data.users[0].displayName);
        setUrl(data.users[0].photoUrl);
      };
      fetching();
  },[tokid])

  const handleprofile = async (event) => {
    event.preventDefault();
    await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBLAYe2M0Gf_twVPGDmlWvNQpbMyvtkLYs",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: tokid,
          displayName: Dname.current.value,
          photoUrl: photo.current.value,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    );    
    navigate("/user");
   };
  
  const handlecancel=()=>{
    navigate("/home");
  }

  return (
    <div class="items-center bg-gray-400">
      <form onSubmit={handleprofile}>
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12 justify-items-center mx-8">
            <h2 class="text-xl text-base font-semibold leading-7 text-gray-900">
              Profile
            </h2>
            <div class="col-span-full">
              <div class="mt-2 flex items-center gap-x-3">
              </div>
            </div>
          </div>
        </div>

        <div class="border-b border-gray-900/10 pb-12 items-center">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3 items-center">
              <label
                for="first-name"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  ref={Dname}
                  value={n}
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                for="last-name"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Profile Photo URL
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  ref={photo}
                  value={url}
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            class="text-sm font-semibold leading-6 text-gray-900"
            onClick={handlecancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
      </div>
     
  );
};
export default Profile;
