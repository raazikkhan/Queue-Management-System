import React from "react";
import { IoPersonRemove } from "react-icons/io5";
function QueueDisplay() {
  return (
    <>
      <div className="bg-zinc-800 w-5xl px-10 py-10 rounded-2xl">
        <h1 className="text-blue-400  text-start font-bold text-3xl p-6">
          Current Queue
        </h1>
        <div className="flex items-center justify-between p-6 bg-zinc-900 rounded-lg">
          <div>
            <h3 className="font-bold text-xl">UserName</h3>
            <p className="text-zinc-400">Services</p>
            <p className="text-orange-300">waiting</p>
          </div>
          <div className="flex gap-4 text-white">
            <button className="bg-green-500 p-4 rounded-xl">Serve</button>
            <button className="bg-red-500 p-4 rounded-lg text-xl">
              <IoPersonRemove />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default QueueDisplay;
