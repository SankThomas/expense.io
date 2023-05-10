import Link from "next/link";
import { BsGraphUp } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";

export default function Sidebar() {
  return (
    <>
      <article className="fixed bottom-0 left-0 w-full md:relative md:h-screen bg-white p-4 md:p-10 shadow md:w-auto">
        <nav>
          <ul className="flex items-center md:items-start justify-between flex-wrap gap-4 md:gap-10 md:flex-col">
            <li>
              <Link
                href="/"
                className="flex items-center gap-2 hover:opacity-75 transition-all duration-150 cursor-pointer"
              >
                <BsGraphUp className="text-2xl hover:opacity-75 transition-all duration-150 cursor-pointer" />
                Expense.io{" "}
              </Link>
            </li>
            <li>
              <Link
                href="/budget"
                className="flex items-center gap-2 hover:opacity-75 transition-all duration-150 cursor-pointer"
              >
                <AiOutlinePieChart className="text-2xl hover:opacity-75 transition-all duration-150 cursor-pointer" />
                Budget{" "}
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="flex items-center gap-2 hover:opacity-75 transition-all duration-150 cursor-pointer"
              >
                <CiSettings className="text-2xl hover:opacity-75 transition-all duration-150 cursor-pointer" />
                Settings{" "}
              </Link>
            </li>
          </ul>
        </nav>
      </article>
    </>
  );
}
