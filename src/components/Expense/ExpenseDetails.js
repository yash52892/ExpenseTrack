import ExpenseData from "./ExpenseData";

const ExpenseDetails = (props) => {
  const expItems = props.items.map((item) => (
    <ExpenseData
      title={item.title}
      amount={item.amount}
      desp={item.desp}
      cat={item.cat}
    />
  ));
  return (
    <table class="min-w-full">
      <thead class="bg-white border-b">
        <tr>
          <th
            scope="col"
            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            Title
          </th>
          <th
            scope="col"
            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            Description
          </th>
          <th
            scope="col"
            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            Amount
          </th>
          <th
            scope="col"
            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            Catagory
          </th>
        </tr>
      </thead>
      <tbody>
      {expItems}
      </tbody>
    </table>
  );
};
export default ExpenseDetails;
