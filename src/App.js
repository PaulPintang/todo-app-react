import "./App.css";
// components
import Header from "./components/Header";
import Post from "./components/Post.jsx";

function App() {
  return (
    <div className="m-auto p-7" style={{ maxWidth: 800 }}>
      <Header />
      <Post />
    </div>
  );
}

export default App;
