import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import News from "./News";
import Feed from "./Feed";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main__page">
        <Sidebar />
        <Feed />
        <News />
      </div>
    </div>
  );
}

export default App;
