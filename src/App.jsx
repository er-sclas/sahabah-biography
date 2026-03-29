import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MarthadBiography from "./pages/MarthadBiography";

const basename = import.meta.env.BASE_URL;

export default function App() {
  return (
    <BrowserRouter basename={basename}>
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
