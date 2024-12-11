import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemPage } from "./pages/ItemPage/ItemPage";
import { HomePage } from "./pages/HomePage/HomePage";
import ItemsPage from "./pages/ItemsPage/ItemsPage";
import { ROUTES } from "./Routes";
import { useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";
import { dest_root } from "../target_config";

//const { invoke } = (window as any).tauri;

function App() {
  useEffect(() => {
    invoke('tauri', { cmd: 'create' })
      .then((response: any) => console.log(response))
      .catch((error: any) => console.log(error))
    return () => {
      invoke('tauri', { cmd: 'close' })
        .then((response: any) => console.log(response))
        .catch((error: any) => console.log(error))
    }

  }, []);
  return (
    <BrowserRouter basename={dest_root}>
      <Routes>
        <Route path={ROUTES.HOME} index element={<HomePage />} />
        <Route path={ROUTES.ITEMS} element={<ItemsPage />} />
        <Route path={`${ROUTES.ITEMS}/:id`} element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;