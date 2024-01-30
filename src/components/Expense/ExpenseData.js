const ExpenseData = (props) => {

  const deleteHandler = () => {
    fetch(
      `https://ecommerce-5629f-default-rtdb.firebaseio.com/expense/${props.id}.json`,
      {
        method: "DELETE",
      }
    ).then(() => console.log("Sucessfully deleted"));
  };
  const editHandler = async () => {

    const r=await fetch(
      `https://ecommerce-5629f-default-rtdb.firebaseio.com/expense/${props.id}.json`,
      {
        method: "GET"
      }
    )
    const dataa=await r.json();
    dataa.id=props.id;
    props.getUpdateddata(dataa);
  };
  return (
    <tr class="bg-gray-100 border-b">
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {props.title}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {props.desp}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {props.amount}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {props.cat}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <button
          onClick={editHandler}
          class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 
      focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 
      dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
        >
          Edit
        </button>
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <button
          onClick={deleteHandler}
          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 
      focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 
      dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ExpenseData;
