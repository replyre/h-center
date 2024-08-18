import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App min-h-screen bg-gray-50">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
