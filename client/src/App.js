import "./App.css";
// components
import Todo from "./components/Todo.jsx";

function App() {
  return (
    <div className="m-auto p-7" style={{ maxWidth: 430 }}>
      <h1 className="text-2xl font-semibold text-center pb-4">
        Todo App / MERN Stack
      </h1>
      <Todo />
    </div>
  );
}

export default App;
