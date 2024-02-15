import { Outlet, Link } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { setMode } from "../Redux/Slice/theme";
import { useDispatch, useSelector } from "react-redux";
import LogOut from "../Redux/Slice/auth";

const Layout = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.mode);
  const expense = useSelector((state) => state.expense.expense);

  const handleLogout = () => {
    dispatch(LogOut());
  };
  let total=0,premium=false;
  if(expense){
    expense.map((item)=>total=total+parseInt(item.amount))
    if(total>10000){
      premium=true
    }
  }
  
  const handleDownload = () => {
    const link = document.createElement('a');
    if(expense){
    const blob1=new Blob([expense], {type: "csv"});
    link.href = URL.createObjectURL(blob1);
    link.download = 'Example.csv';
    link.click();
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-5">
        <div className="flex items-center flex-shrink-0 text-white">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            React Expense{" "}
          </span>
        </div>
        <div className="text-xl flex mr-7">
          <Link
            to="/home"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            {" "}
            Home{" "}
          </Link>
          <Link
            to="/profile"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            {" "}
            Profile{" "}
          </Link>
          <Link
            to="/expense"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            {" "}
            Expense{" "}
          </Link>
          <Link
            to="/sign"
            onClick={handleLogout}
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            {" "}
            Log out{" "}
          </Link>
        </div>
        <div className="flex">
          {premium?(<section
            className={`${
              darkMode ? "text-richblack-100 pl-5" : "text-richblack-700 pl-5"
            }`}
            onClick={() => {
              dispatch(setMode(!darkMode));
            }}
          >
            {darkMode ? (
              <MdOutlineLightMode size={"35px"} />
            ) : (
              <MdOutlineDarkMode size={"35px"} />
            )}
          </section>):<></>}
          {premium? (<button
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            onClick={handleDownload}>
            Download
          </button>):(<div></div>)}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
