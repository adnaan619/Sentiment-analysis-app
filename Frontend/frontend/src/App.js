import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
// pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signupPage";
import TermsAndConditions from "./pages/terms&conditions";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/sign-up" element={<SignUpPage/>} />
            <Route path="/terms&conditions" element={<TermsAndConditions/>}/>
          </Routes>
        </div>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
