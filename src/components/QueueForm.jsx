import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoPersonAddSharp } from "react-icons/io5";

function QueueForm() {
  return (
    <div className="flex flex-col bg-zinc-800 p-10  gap-10 h-1/6 w-lg rounded-2xl ">
      <h1 className="text-blue-400  text-start font-bold text-3xl">
        Add to Queue
      </h1>
      <input
        placeholder="Customer Name"
        className="bg-zinc-600 p-2 rounded-lg"
      />
      <button className=" border-2 border-solid border-zinc-500 text-white px-4 py-2 rounded-lg focus:outline-none cursor-pointer text-xl flex items-center justify-between">
        Select Services <IoMdArrowDropdown />
      </button>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none cursor-pointer text-xl flex items-center justify-center gap-4">
        <IoPersonAddSharp /> Add Customer
      </button>
    </div>
  );
}

export default QueueForm;
