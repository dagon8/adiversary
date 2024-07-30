import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AppProvider } from "./context/Context";
import Gallery from "./pages/Gallery";
import Anniversary from "./pages/Anniversary";
import Date from "./pages/Date";

function App() {
  return (
    <AppProvider>
      <BrowserRouter basename="/adiversary/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/anniversary" element={<Anniversary />} />
          <Route path="/date" element={<Date />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
