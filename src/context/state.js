import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

export const StateContext = createContext();

export default function State({ children }) {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [total, setTotal] = useState(0);

  const handleSubmitExpense = (e) => {
    e.preventDefault();

    if (!expense) {
      toast.error("Please add an expense");
    } else if (!amount) {
      toast.error("Please add an amount");
    } else {
      const newExpense = {
        id: uuidv4(),
        expense,
        amount,
      };
      toast.success("Expense added!");
      setExpenses([newExpense, ...expenses]);
      setAmount("");
      setExpense("");
    }
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
    toast.warning("You have successfully deleted this item");
    setShowModal(false);
  };

  function calculateTotal(expenses) {
    const newSum = expenses;
    let sum = 0;

    for (let i = 0; i < newSum.length; i += 1) {
      sum += newSum[i];
    }

    setTotal(sum);
  }

  useEffect(() => {
    calculateTotal();
  }, [expenses]);

  const context = {
    expense,
    setExpense,
    amount,
    setAmount,
    handleSubmitExpense,
    expenses,
    handleDeleteExpense,
    showModal,
    setShowModal,
    total,
  };

  return (
    <StateContext.Provider value={context}>{children}</StateContext.Provider>
  );
}
