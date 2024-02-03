import { useEffect, useRef, useState } from "react";
import ExpenseDetails from "./ExpenseDetails";
import { useDispatch, useSelector } from "react-redux";
import {postExpense,fetchExpense} from "../../Redux/Slice/expense";
import Editmodal from "./Editmodal";

const ExpenseForm = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false)};

  const expense = useSelector((state) => state.expense.expense);

  const [editted, seteditted] = useState([]);
  const title = useRef("");
  const amount = useRef("");
  const desp = useRef("");
  const cat = useRef("");

  const handleaddexpense = async (event) => {
    event.preventDefault();
    const obj = {
      title: title.current.value,
      amount: amount.current.value,
      desp: desp.current.value,
      cat: cat.current.value,
    };
    dispatch(postExpense(obj));
  };

  useEffect(() => {
    dispatch(fetchExpense());
  }, []);

  const handleupdated = (edited) => {
    setShow(true);
    seteditted(edited);
  };

  return (
    <>
    {show && <Editmodal newval={editted} onClose={handleClose}/>}
      <div className="bg-white w-85 p-4 border-2 rounded-md flex flex-col items-center">
        <h1 className="text-xl">ADD Expense</h1>
        <form className="mt-4 w-50%">
          <div className="my-4 text-sm">
            <label htmlFor="text" className="block text-black">
              Money spent
            </label>
            <input
              type="text"
              ref={title}
              autoFocus
              className="rounded-sm px-4 py-3 mt-1 focus:outline-none bg-gray-100 w-full"
              placeholder="Enter Text"
            />
          </div>
          <div className="my-4 text-sm">
            <label htmlFor="text" className="block text-black">
              Description
            </label>
            <input
              type="text"
              ref={desp}
              autoFocus
              className="rounded-sm px-4 py-3 mt-1 focus:outline-none bg-gray-100 w-full"
              placeholder="Enter Text"
            />
          </div>
          <div className="my-4 text-sm">
            <label htmlFor="amount" className="block text-black">
              Amount
            </label>
            <input
              type="number"
              ref={amount}
              autoFocus
              className="rounded-sm px-4 py-3 mt-1 focus:outline-none bg-gray-100 w-full"
              placeholder="Enter Amount"
            />
          </div>
          <div className="my-4 text-sm">
            <label htmlFor="amount" className="block text-black">
              Catagory
            </label>
            <div className="w-72">
              <select
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 
              border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none 
              focus:ring-0 focus:border-gray-200 peer"
                ref={cat}
              >
                <option defaultValue>Choose a Catagory</option>
                <option value="Food">Food</option>
                <option value="Petrol">Petrol</option>
                <option value="Shopping">Shopping</option>
                <option value="EMI">EMI</option>
              </select>
            </div>
          </div>
          <div className="my-4">
              <button
                onClick={handleaddexpense}
                className="rounded-sm block text-center text-white bg-gray-800 p-3 duration-300  hover:bg-black w-full"
              >
                Add Transaction
              </button>
          </div>
        </form>
      </div>
      <div>
        <h2 className="text-xl text-center">List of Expense</h2>
        {expense && (
          <ExpenseDetails items={expense} getUpdated={handleupdated} />
        )}
      </div>
    </>
  );
};
export default ExpenseForm;
