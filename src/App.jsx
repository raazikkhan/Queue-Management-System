import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";
function App() {
  return (
    <>
      <div className="bg-black h-screen text-white">
        <div className=" text-blue-400 flex items-center justify-center flex-col p-30 ">
          <h1 className="text-5xl font-bold  ">Queue Management System</h1>
          <p className="text-zinc-300 p-3 text-2xl">
            Manage Your Customer Efficiently{" "}
          </p>
        </div>
        <div className="flex items-center justify-evenly ">
          {" "}
          <QueueForm />
          <QueueDisplay />
        </div>
      </div>
    </>
  );
}

export default App;
