import { useEffect, useRef, useState } from "react";
import ExpenseDetails from "./ExpenseDetails";


const ExpenseForm = () => {
  const [expense, setExpense] = useState([]);
  const [editted, seteditted] = useState([]);
  const [edit, setedit] = useState(false);
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

    await fetch(
      "https://ecommerce-5629f-default-rtdb.firebaseio.com/expense.json",
      {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((data) => {
      data.json().then((da) => {
        obj.id = da.name;
        console.log(obj);
        setExpense((pre) => [...pre, obj]);
      });
    });
  };

  useEffect(() => {
    const fetching = () => {
      fetch(
        `https://ecommerce-5629f-default-rtdb.firebaseio.com/expense.json`,
        {
          method: "GET",
        }
      ).then((res) =>
        res.json().then((dat) => {
          if (dat) {
            Object.entries(dat).forEach(([k, v]) => {
              console.log(v, k);
              fetch(
                `https://ecommerce-5629f-default-rtdb.firebaseio.com/expense/${k}.json`,
                {
                  method: "GET",
                }
              ).then((result) => {
                result.json().then((data) => {
                  data.id = k;
                  setExpense((pre) => [...pre, data]);
                });
              });
            });
          }
        })
      );
    };
    return () => fetching();
  }, []);

  const handleupdated = (edited) => {
    setedit(true);
    seteditted(edited);
  };
  let nid=editted.id;
  console.log(nid);
  const hanldedit = async () => {
    console.log(editted.id);
    const obj1 = {
      title: title.current.value,
      amount: amount.current.value,
      desp: desp.current.value,
      cat: cat.current.value
    };
    
    console.log(obj1,nid);
    const res=await fetch(`https://ecommerce-5629f-default-rtdb.firebaseio.com/expense/${nid}.json`,
      {
        method: "PATCH",
        headers:{
          'Content-Type':'application/json'
          },
          body: JSON.stringify({
            "cat": "Petrol"
          })})
          if(!res.ok){
            console.error();
          }
      const d=await res.json();
      console.log(d);
      console.log(d);
  };

  return (
    <>
      <div
        class="bg-white w-85 p-4 border-2 rounded-md flex flex-col  
    items-center"
      >
        <h1 class="text-xl">ADD Expense</h1>
        <form class="mt-4 w-50%">
          <div class="my-4 text-sm">
            <label htmlFor="text" class="block text-black">
              Money spent
            </label>
            <input
              type="text"
              ref={title}
              value={editted.title}
              autoFocus
              class="rounded-sm px-4 py-3 mt-1 focus:outline-none bg-gray-100 w-full"
              placeholder="Enter Text"
            />
          </div>
          <div class="my-4 text-sm">
            <label htmlFor="text" class="block text-black">
              Description
            </label>
            <input
              type="text"
              ref={desp}
              value={editted.desp}
              autoFocus
              class="rounded-sm px-4 py-3 mt-1 focus:outline-none bg-gray-100 w-full"
              placeholder="Enter Text"
            />
          </div>
          <div class="my-4 text-sm">
            <label htmlFor="amount" class="block text-black">
              Amount
            </label>
            <input
              type="number"
              ref={amount}
              value={editted.amount}
              autoFocus
              class="rounded-sm px-4 py-3 mt-1 focus:outline-none bg-gray-100 w-full"
              placeholder="Enter Amount"
            />
          </div>
          <div class="my-4 text-sm">
            <label htmlFor="amount" class="block text-black">
              Catagory
            </label>
            <div className="w-72">
              <select
                class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 
              border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none 
              focus:ring-0 focus:border-gray-200 peer"
                ref={cat}
                value={editted.ca}
              >
                <option defaultValue>Choose a Catagory</option>
                <option value="Food">Food</option>
                <option value="Petrol">Petrol</option>
                <option value="Shopping">Shopping</option>
                <option value="EMI">EMI</option>
              </select>
            </div>
          </div>
          <div class="my-4">
            {edit ? (
              <button
                onClick={hanldedit}
                class="rounded-sm block text-center text-white bg-gray-800 p-3 duration-300  hover:bg-black w-full"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={handleaddexpense}
                class="rounded-sm block text-center text-white bg-gray-800 p-3 duration-300  hover:bg-black w-full"
              >
                Add Transaction
              </button>
            )}
          </div>
        </form>
      </div>
      <div>
        <h2 class="text-xl text-center">List of Expense</h2>
        {expense && (
          <ExpenseDetails items={expense} getUpdated={handleupdated} />
        )}
      </div>
    </>
  );
};
export default ExpenseForm;
