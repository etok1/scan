import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import FormPage from "./components/FormPage/FormPage";
import Result from "./components/Result/Result";

function App() {
  return ( 
    <Router> 
      <div className="App">
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/auth" element={<FormPage />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </div>
        <Footer />
      </div>  
    </Router> 
  );
}

export default App;
