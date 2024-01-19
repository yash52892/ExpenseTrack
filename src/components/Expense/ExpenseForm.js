import { useRef } from "react";

const ExpenseForm = () => {
    const title=useRef(null);
    const amount=useRef(null);
    const desp=useRef(null);
    const cat=useRef(null);
    const obj={
        title:title.current.value, 
        amount:amount.current.value, 
        desp:desp.current.value, 
        cat:cat.current.value
    }

    const handleaddexpense=(event)=>{
        event.preventDefault();
        console.log(obj);
    }
  return (
    <>
      <div
        class="bg-white w-85 p-4 border-2 rounded-md flex flex-col  
    items-center"
      >
        <h1 class="text-xl">ADD Expense</h1>
        <form class="mt-4 w-50%" onSubmit={handleaddexpense}>
          <div class="my-4 text-sm">
            <label htmlFor="text" class="block text-black">
              Money spent
            </label>
            <input
              type="text"
              ref={title}
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
              <select class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                <option selected>Choose a Catagory</option>
                <option ref={cat}>Food</option>
                <option ref={cat}>Petrol</option>
                <option ref={cat}>Shopping</option>
                <option ref={cat}>EMI</option>
              </select>
            </div>
          </div>
          <div class="my-4">
            <button type="submit" class="rounded-sm block text-center text-white bg-gray-800 p-3 duration-300  hover:bg-black w-full">
              Add Transaction
            </button>
          </div>
        </form>
      </div>
      <div>
        <h2 class="text-xl">List of Expense</h2>
        <ul>
            <li>{obj.title}</li>
            <li>{obj.amount}</li>
            <li>{obj.desp}</li>
            <li>{obj.cat}</li>
        </ul>
      </div>
    </>
  );
};
export default ExpenseForm;
