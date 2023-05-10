import { useContext } from "react";
import { StateContext } from "../context/state";

export default function Modal({ id }) {
  const { handleDeleteExpense, setShowModal } = useContext(StateContext);

  return (
    <>
      <div className="modal">
        <div>
          <h2>Danger Zone!</h2>
          <br />
          <p>
            Be careful. You are about to delete an entry. This is an
            irreversible action.
          </p>

          <br />
          <ul className="flex flex-wrap gap-4">
            <li>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </li>
            <li>
              <button
                onClick={() => handleDeleteExpense(id)}
                className="btn-primary"
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
