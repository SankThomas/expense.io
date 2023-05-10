import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import collect from "collect.js";

export const StateContext = createContext();

export default function State({ children }) {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [total, setTotal] = useState(0);
  const [budget, setBudget] = useState();
  const [budgetItems, setBudgetItems] = useState([]);

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

  const calculateTotal = () => {
    const allExpenses = expenses.map((expense) => expense.amount);

    setTotal(collect(allExpenses).sum());
  };

  useEffect(() => {
    calculateTotal();
  });

  const handleSubmitBudget = (e) => {
    e.preventDefault();

    if (!budget) {
      toast.error("You need to add your budget before submitting");
    } else {
      const newBudget = {
        id: uuidv4(),
        budget,
      };
      setBudgetItems([newBudget]);
      setBudget();
    }
  };

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
    handleSubmitBudget,
    budget,
    setBudget,
    budgetItems,
  };

  return (
    <StateContext.Provider value={context}>{children}</StateContext.Provider>
  );
}
