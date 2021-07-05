import logo from "./logo.svg";

function App() {
  return (
    <div className="block absolute bg-gray-500 w-screen h-screen p-4">
      <div className="block h-auto bg-gradient-to-r from-green-500 rounded-2xl">
        <img src={logo} className="mx-auto w-96 h-96 animate-spin" alt="logo" />
        <div className="flex-row relative pb-12  text-center ">
          <p className="mx-auto font-courier">
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="mx-auto mb-12 font-courier text-blue-800 text-2xl"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
