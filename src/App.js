import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Reservation from "./pages/reservation/Reservation";
import Error from "./pages/Error/Error";
import { FilterProvider } from "./context/FilterContext";

const App = () => {
  return (
    <FilterProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </FilterProvider>
  );
};

export default App;
