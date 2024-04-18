
import { Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import ForgotPassword from "./routes/ForgotPassword";
import Home from "./routes/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";


function App() {
  const [TokenId, setTokenId] = useState(localStorage.getItem("sioe_token_id") || "");
  const [UserId, setUserId] = useState(localStorage.getItem("sioe_user_id") || "");
  const [Username, setUsername] = useState(localStorage.getItem("sioe_username") || "");
  const [UserOwns, setUserOwns] = useState({ TotalAmount: '', TotalTokens: '' });
  const [Activities, setActivities] = useState([]);

  const [Session, setSession] = useState(false);

  useEffect(()=>{
    if(Session) { setUsername(localStorage.getItem("sioe_username")) }
  },[Session])



  return (
    <>
      <Header Username={Username} setUsername={setUsername} setUserOwns={setUserOwns} setSession={setSession} />
      <Routes>
        <Route path="/" element={
          <Home 
            UserOwns={UserOwns} setUserOwns={setUserOwns} Session={Session}
            Activities={Activities} setActivities={setActivities} />} 
          />
        <Route path="/login" element={
          <Login setTokenId={setTokenId} setUserId={setUserId} 
            setUserOwns={setUserOwns} setSession={setSession} />} 
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;