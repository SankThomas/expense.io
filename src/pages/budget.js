import { useContext } from "react";
import { StateContext } from "@/context/state";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Budget() {
  const { budget, setBudget, budgetItems, handleSubmitBudget } =
    useContext(StateContext);

  return (
    <>
      <div>
        <h1 className="mb-4">Budget page</h1>
        <p>Add or update your budget from here.</p>
      </div>

      <form onSubmit={handleSubmitBudget} className="mt-8">
        <article>
          <label htmlFor="budget" className="mb-2">
            Enter your budget
          </label>
          <input
            type="text"
            name="budget"
            id="budget"
            placeholder="Enter your budget"
            required
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </article>
        <button
          type="submit"
          onClick={handleSubmitBudget}
          className="btn-primary"
        >
          Add Budget
        </button>
      </form>

      <br />

      <div>
        {budgetItems.map((item) => (
          <article key={item.id}>
            <h2>Current budget: {item.budget}</h2>
          </article>
        ))}
      </div>

      <ToastContainer theme="colored" autoClose={3000} />
    </>
  );
}
