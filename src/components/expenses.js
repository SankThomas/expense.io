import { useContext } from "react";
import { StateContext } from "../context/state";
import { AiOutlineDelete } from "react-icons/ai";
import Modal from "./modal";

export default function Expenses() {
  const { expenses, showModal, setShowModal, total } = useContext(StateContext);

  return (
    <>
      <h3 className="flex items-center justify-between">
        Current Expenses <span>{total}</span>
      </h3>
      <br />

      <ol className="expenses">
        {!expenses ? (
          <h3>No current expenses</h3>
        ) : (
          expenses.map((expense) => (
            <li key={expense.id} className="text-xl">
              {expense.expense}{" "}
              <span className="text-2xl font-bold tracking-wide">
                {expense.amount}{" "}
                <button onClick={() => setShowModal(true)}>
                  <AiOutlineDelete className="delete-icon" />
                </button>
              </span>
              {showModal && <Modal id={expense.id} />}
            </li>
          ))
        )}
      </ol>
    </>
  );
}
