import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
