import { useDispatch } from 'react-redux';
import { deleteExpense } from '../../Redux/Slice/expense';

const ExpenseData = (props) => {
  
  const dispatch=useDispatch();

  const deleteHandle = () =>{
    console.log(props);
    dispatch(deleteExpense(props.id));
  }

  const editHandler =  () => {
    props.getUpdated(props);
  };
  return (
    <tr className="bg-gray-100 border-b">
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {props.title}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {props.desp}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {props.amount}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {props.cat}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <button
        onClick={editHandler}
          className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 
      focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 
      dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
        >
          Edit
        </button>
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <button
          onClick={deleteHandle}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 
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
