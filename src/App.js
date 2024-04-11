
import { Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import ForgotPassword from "./routes/ForgotPassword";
import Otp from "./components/otp/Otp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset" element={<ForgotPassword />} />
        <Route path="/otp" element={<Otp />} />
      </Routes>
    </>
  );
}

export default App;