import { Button, Form } from "react-bootstrap";
import Modal from "../UI/Modal";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { editExpense } from "../../Redux/Slice/expense";

const Editmodal = (props) => {

  const dispatch = useDispatch();

  const t=useRef(null);
  const d=useRef(null);
  const c=useRef(null)
  const a=useRef(0);
  
  const handleSubmit = async () =>{
    const obj={
      title:t.current.value,
      desp:d.current.value,
      amount:a.current.value,
      cat:c.current.value,
      id:props.newval.id
    }
    dispatch(editExpense(obj));
    props.onClose();
  }

  return (
    <Modal onClose={props.onClose}>
      <Form onSubmit={handleSubmit} className="grid gap-3 p-2">
        <Form.Group className="flex gap-3 mb-3">
          <Form.Label>Money Spent: </Form.Label>
          <Form.Control type="text" placeholder="Enter Title"  ref={t}/>
        </Form.Group>
        <Form.Group className="flex gap-3 mb-3">
          <Form.Label>Description: </Form.Label>
          <Form.Control type="text" placeholder="Enter Description" ref={d} />
        </Form.Group>
        <Form.Group className="flex gap-3 mb-3">
          <Form.Label>Amount: </Form.Label>
          <Form.Control type="number" placeholder="Enter Amount"  ref={a}/>
        </Form.Group>
        <Form.Select aria-label="Default select example" ref={c}>
          <option defaultValue>Choose a Catagory: </option>
          <option value="Food">Food</option>
          <option value="Petrol">Petrol</option>
          <option value="Shopping">Shopping</option>
          <option value="EMI">EMI</option>
        </Form.Select>
        <Button className="btn btn-dark" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Modal>
  );
};
export default Editmodal;
