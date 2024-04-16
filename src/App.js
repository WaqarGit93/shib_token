
import { Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import ForgotPassword from "./routes/ForgotPassword";
import Home from "./routes/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;