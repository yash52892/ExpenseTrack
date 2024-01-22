const ExpenseData=(props)=>{
    
    return(
      <tr class="bg-gray-100 border-b">
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {props.amount}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {props.desp}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {props.desp}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {props.cat}
      </td>
    </tr>
    )
}

export default ExpenseData;