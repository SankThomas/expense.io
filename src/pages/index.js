import { useContext } from "react";
import { StateContext } from "@/context/state";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Expenses from "@/components/expenses";
import Head from "next/head";
import Sidebar from "@/components/sidebar";

export default function App() {
  const { expense, setExpense, amount, setAmount, handleSubmitExpense } =
    useContext(StateContext);

  return (
    <>
      <Head>
        <title>
          Expense.io | Track you expenses and expenditure easily using our
          expense tracker | Download expenditure reports, view and edit your
          budgets
        </title>
        <meta
          name="description"
          content="Expense.io | Track you expenses and expenditure easily using our expense tracker | Download expenditure reports, view and edit your budgets"
        />
        <meta name="author" content="Thomas Sankara, TsbSankara" />
        <meta name="keywords" content="expense tracker, expense.io, expensio" />
      </Head>

      <main>
        <section className="max-w-[800px]">
          <h1>Expense.io</h1>

          <div className="expense">
            <br />
            <form onSubmit={handleSubmitExpense}>
              <article>
                <label htmlFor="expense">Add expense</label>
                <input
                  type="text"
                  name="expense"
                  id="expense"
                  placeholder="Add expense"
                  required
                  value={expense}
                  onChange={(e) => setExpense(e.target.value)}
                />
              </article>

              <article>
                <label htmlFor="amount">Add amount</label>
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  placeholder="Add amount"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </article>

              <button
                onClick={handleSubmitExpense}
                type="submit"
                className="btn-primary"
              >
                Add Expense
              </button>

              <ToastContainer
                theme="colored"
                hideProgressBar={true}
                autoClose={3000}
              />
            </form>
          </div>

          <br />
          <Expenses />
        </section>
      </main>
    </>
  );
}
