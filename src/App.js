import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Reservation from "./pages/reservation/Reservation";
import Error from "./pages/error/Error";
import { FilterProvider } from "./context/FilterContext";
import { ApartmentProvider } from "./context/ApartmentContext";

const App = () => {
  return (
    <ApartmentProvider>
      <FilterProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </FilterProvider>
    </ApartmentProvider>
  );
};

export default App;
