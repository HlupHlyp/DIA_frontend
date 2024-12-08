import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemPage } from "./pages/ItemPage/ItemPage";
import { HomePage } from "./pages/HomePage/HomePage";
import ItemsPage from "./pages/ItemsPage/ItemsPage";
import { ROUTES } from "./Routes";

function App() {
  return (
    <BrowserRouter basename="/solar_plant_calc_front">
      <Routes>
        <Route path={ROUTES.HOME} index element={<HomePage />} />
        <Route path={ROUTES.ITEMS} element={<ItemsPage />} />
        <Route path={`${ROUTES.ITEMS}/:id`} element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;