import "./App.css";
import Header from "./component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Ministries from "./component/Ministries";
import Sermon from "./component/Sermon";
import Footer from "./component/Footer";
import PastorDetails from "./component/PastorDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main >
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="pastordetails" element={<PastorDetails/>} />
          <Route path="ministries" element={<Ministries />} />
          <Route path="sermon" element={<Sermon />} />
        </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
