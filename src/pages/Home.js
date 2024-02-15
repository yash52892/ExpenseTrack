import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';


const Home = () => {
    const tokk=useSelector(state=>state.auth.id);
    const darkMode=useSelector(state=>state.mode.darkMode)
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
    
  return (
    <div className={`transition-all  
    duration-500  
    ease-in-out  
    ${darkMode ?  
    "bg-black " :  
    "bg-white"}`}>
      <div className="relative isolate px-6 pt-14 lg:px-8 text-center">
        <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Welcome to Expense Tracker!!!
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Your profile is incomplete.{" "}
          <button>
            <Link to="/profile">Complete now</Link>
          </button>{" "}
        </p>
      </div>
      <div className="relative isolate px-6 pt-14 lg:px-8 text-center">
        <button
          className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
          onClick={handleEmailverify}
        >
          <Link to="/profile">Verify Email</Link>
        </button>{" "}
      </div>
    </div>
  );
};
export default Home;
