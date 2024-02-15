import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const[n, setName]=useState(null);
  const[url,setUrl]=useState(null);

  const Dname = useRef(null);
  const photo = useRef(null);   

  const navigate=useNavigate();

  const tokid=localStorage.getItem("id");
  const darkMode=useSelector(state=>state.mode.darkMode)

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
        if(data){
          setName(data.users.displayName);
          setUrl(data.users.photoUrl);
        }
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
    <div className={`transition-all  
    duration-500  
    ease-in-out  
    ${darkMode ?  
    "bg-black " :  
    "bg-white"}`}>
      <form onSubmit={handleprofile}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12 justify-items-center mx-8">
            <h2 className="text-xl text-base font-semibold leading-7 text-red-900">
              Profile
            </h2>
            <div className="col-span-full">
              <div className="mt-2 flex items-center gap-x-3">
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12 items-center">
          <h2 className="text-base font-semibold leading-7 text-red-900">
            Personal Information
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3 items-center">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-red-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  ref={Dname}
                  value={n}
                  className="block w-full rounded-md border-0 py-1.5 text-red-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-red-900"
              >
                Profile Photo URL
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  ref={photo}
                  value={url}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-red-900"
            onClick={handlecancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-red shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
      </div>
     
  );
};
export default Profile;
