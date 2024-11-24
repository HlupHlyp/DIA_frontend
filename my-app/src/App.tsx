import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AlbumPage } from "./pages/AlbumPage/AlbumPage";
import { HomePage } from "./pages/HomePage/HomePage";
import ItemsPage from "./pages/ItemsPage/ItemsPage";
import { ROUTES } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} index element={<HomePage />} />
        <Route path={ROUTES.ITEMS} element={<ItemsPage />} />
        <Route path={`${ROUTES.ITEMS}/:id`} element={<AlbumPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;