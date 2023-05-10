import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <>
      <div class="absolute -z-10  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full blur-[200px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[300px] h-[200px]"></div>

      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="p-8 flex-1">{children}</div>
      </div>
    </>
  );
}
