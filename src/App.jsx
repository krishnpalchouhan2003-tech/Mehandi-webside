import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bridal from "./pages/Bridal";
import Groom from "./pages/Groom";
import BabyShower from "./pages/BabyShower";
import ViewDesigns from "./pages/ViewDesigns";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bridal" element={<Bridal />} />
        <Route path="/groom" element={<Groom />} />
        <Route path="/baby-shower" element={<BabyShower />} />
        <Route path="/designs" element={<ViewDesigns />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;