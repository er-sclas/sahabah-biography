import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MarthadBiography from "./pages/MarthadBiography";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/biography/marthad-bin-abi-marthad"
            element={<MarthadBiography />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
