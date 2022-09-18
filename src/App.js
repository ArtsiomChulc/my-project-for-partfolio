import './App.css';
import Header from "./components/Header";
import Connection from "./components/Connection";
import Projects from "./components/Header";
import Technologies from "./components/Header";
import Additional_technologies from "./components/Additional_technologies";
import About_me from "./components/About_me";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Connection />
      <Projects />
      <Technologies />
      <Additional_technologies />
      <About_me />
      <Footer />
    </div>
  );
}

export default App;
