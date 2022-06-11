import "./App.css";
import Header from "./component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Footer from "./component/Footer";
import PastorDetails from "./component/PastorDetails";
import PrayerRequestForm from "./component/PrayerRequestForm";
import SermonDetails from "./component/SermonDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main >
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="pastordetails" element={<PastorDetails/>} />
          <Route path="prayerrequestform" element={<PrayerRequestForm />} />
          <Route path="sermondetails" element={<SermonDetails />} />
        </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
